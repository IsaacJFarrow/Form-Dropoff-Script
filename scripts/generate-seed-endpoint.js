import { readFileSync, writeFileSync } from 'fs';

const data = JSON.parse(readFileSync('seed-data.json', 'utf8'));

// Transform field names from SQL format to KV format
const transformed = data.map(row => ({
  timestamp: row.timestamp,
  sessionId: row.session_id,
  event:     row.event_type,
  step:      row.step,
}));

const content = `import type { APIRoute } from 'astro';

export const prerender = false;

// Historical data migrated from Cloudflare KV
const SEED_DATA = ${JSON.stringify(transformed)};

export const POST: APIRoute = async ({ request, locals }) => {
  const auth = request.headers.get('x-seed-token');
  if (auth !== 'wiw-seed-2025') {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const kv = (locals.runtime.env as any).EVENTS_KV;
  if (!kv) {
    return new Response(JSON.stringify({ error: 'KV not configured.' }), { status: 500 });
  }

  // Check if already seeded
  const existing = await kv.list({ prefix: 'event:', limit: 1 });
  if (existing.keys.length > 0) {
    return new Response(JSON.stringify({ message: 'Already seeded' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Insert all events
  let inserted = 0;
  for (const row of SEED_DATA) {
    const key = \`event:\${row.timestamp}:\${row.sessionId}\`;
    await kv.put(key, '', { metadata: row });
    inserted++;
  }

  return new Response(JSON.stringify({ message: 'Seed complete', inserted }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
`;

writeFileSync('src/pages/api/seed.ts', content);
console.log('Generated src/pages/api/seed.ts for KV');
