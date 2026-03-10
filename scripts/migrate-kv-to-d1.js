#!/usr/bin/env node
/**
 * migrate-kv-to-d1.js
 *
 * Exports all event data from Cloudflare KV via REST API and generates
 * import.sql ready to load into D1.
 *
 * Reads auth token from wrangler's stored config automatically.
 *
 * Usage:
 *   node scripts/migrate-kv-to-d1.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

const ACCOUNT_ID    = '653c98bbaea56949d86327de73dfec63';
const NAMESPACE_ID  = '9c721867cff24759b1e0d1df5b501097';
const BASE          = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}`;
const BATCH_SIZE    = 20; // parallel value fetches per batch

// Read OAuth token from wrangler config
const wranglerConfig = join(
  process.env.APPDATA || homedir(),
  'xdg.config/.wrangler/config/default.toml'
);
let token;
try {
  const raw = readFileSync(wranglerConfig, 'utf8');
  token = raw.match(/oauth_token\s*=\s*"([^"]+)"/)?.[1];
} catch {
  console.error('Could not read wrangler config. Run `npx wrangler login` first.');
  process.exit(1);
}
if (!token) {
  console.error('No oauth_token found in wrangler config. Run `npx wrangler login` first.');
  process.exit(1);
}

const headers = { 'Authorization': `Bearer ${token}` };

async function fetchAllKeys() {
  const keys = [];
  let cursor = null;

  do {
    const url = new URL(`${BASE}/keys`);
    url.searchParams.set('limit', '1000');
    if (cursor) url.searchParams.set('cursor', cursor);

    const res  = await fetch(url.toString(), { headers });
    const json = await res.json();

    if (!json.success) throw new Error(`KV list failed: ${JSON.stringify(json.errors)}`);

    keys.push(...json.result.map(k => k.name));
    cursor = json.result_info?.cursor || null;

    process.stdout.write(`  Listed ${keys.length} keys so far...\r`);
  } while (cursor);

  return keys;
}

async function fetchValue(key) {
  const url = `${BASE}/values/${encodeURIComponent(key)}`;
  const res  = await fetch(url, { headers });
  if (!res.ok) return null;
  const text = await res.text();
  try { return JSON.parse(text); } catch { return null; }
}

function sql(val) {
  if (val === null || val === undefined) return 'NULL';
  return `'${String(val).replace(/'/g, "''")}'`;
}

// ── Main ──────────────────────────────────────────

console.log('\nFetching all keys from KV...');
const keys = await fetchAllKeys();
console.log(`\nFound ${keys.length} keys. Fetching values in batches of ${BATCH_SIZE}...\n`);

const rows = [];
let skipped = 0;

for (let i = 0; i < keys.length; i += BATCH_SIZE) {
  const batch   = keys.slice(i, i + BATCH_SIZE);
  const values  = await Promise.all(batch.map(fetchValue));

  for (const val of values) {
    if (val) rows.push(val);
    else skipped++;
  }

  const pct = Math.round(((i + batch.length) / keys.length) * 100);
  process.stdout.write(`  ${i + batch.length}/${keys.length} (${pct}%)...\r`);
}

console.log(`\nFetched ${rows.length} events (${skipped} skipped).\n`);

// Generate SQL
const lines = [
  '-- KV → D1 migration',
  `-- Generated:  ${new Date().toISOString()}`,
  `-- Events:     ${rows.length}`,
  '',
  'BEGIN TRANSACTION;',
  '',
];

for (const event of rows) {
  const timestamp = event.timestamp || new Date().toISOString();
  const sessionId = event.sessionId ?? null;
  const eventType = event.event     ?? null;
  const step      = event.step      ?? null;

  lines.push(
    `INSERT INTO events (timestamp, session_id, event_type, step) VALUES (${sql(timestamp)}, ${sql(sessionId)}, ${sql(eventType)}, ${sql(step)});`
  );
}

lines.push('', 'COMMIT;', '');
writeFileSync('import.sql', lines.join('\n'));

console.log(`Generated import.sql with ${rows.length} events.`);
console.log('\nNext: set up your D1 database then run:');
console.log('  npm run db:setup:remote');
console.log('  npx wrangler d1 execute form-db --remote --file=import.sql\n');
