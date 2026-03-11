import { readFileSync, writeFileSync } from 'fs';

const data = readFileSync('seed-data.json', 'utf8');

const content = `import type { APIRoute } from 'astro';

export const prerender = false;

// Historical data migrated from Cloudflare KV
const SEED_DATA = ${data};

export const POST: APIRoute = async ({ request, locals }) => {
  // Simple auth check
  const auth = request.headers.get('x-seed-token');
  if (auth !== 'wiw-seed-2025') {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const db = (locals.runtime.env as { DB: D1Database }).DB;

  // Check if already seeded
  const existing = await db.prepare('SELECT COUNT(*) as count FROM events').first<{ count: number }>();
  if (existing && existing.count > 0) {
    return new Response(JSON.stringify({ message: 'Already seeded', existing: existing.count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Insert in batches of 100
  const batchSize = 100;
  let inserted = 0;

  for (let i = 0; i < SEED_DATA.length; i += batchSize) {
    const batch = SEED_DATA.slice(i, i + batchSize);
    const stmts = batch.map((row: { timestamp: string; session_id: string; event_type: string; step: string | null }) =>
      db.prepare(
        'INSERT INTO events (timestamp, session_id, event_type, step) VALUES (?, ?, ?, ?)'
      ).bind(row.timestamp, row.session_id, row.event_type, row.step)
    );
    await db.batch(stmts);
    inserted += batch.length;
  }

  return new Response(JSON.stringify({ message: 'Seed complete', inserted }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
`;

writeFileSync('src/pages/api/seed.ts', content);
console.log('Generated src/pages/api/seed.ts');
