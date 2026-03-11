import { readFileSync, writeFileSync } from 'fs';

const data = JSON.parse(readFileSync('seed-data.json', 'utf8'));

const content = `import type { APIRoute } from 'astro';
import { drizzle } from 'drizzle-orm/d1';
import { events } from '../../db/schema';

export const prerender = false;

const SEED_DATA = ${JSON.stringify(data)};

export const GET: APIRoute = async ({ request, locals }) => {
  const url = new URL(request.url);
  if (url.searchParams.get('token') !== 'wiw-seed-2025') {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const d1 = locals.runtime.env.DB;
  if (!d1) {
    return new Response(JSON.stringify({ error: 'DB not configured' }), { status: 500 });
  }

  const db = drizzle(d1);

  const existing = await db.select().from(events).limit(1);
  if (existing.length > 0) {
    return new Response(JSON.stringify({ message: 'Already seeded' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let inserted = 0;
  for (const row of SEED_DATA) {
    await db.insert(events).values({
      timestamp: row.timestamp,
      sessionId: row.session_id,
      eventType: row.event_type,
      step:      row.step ?? null,
    });
    inserted++;
  }

  return new Response(JSON.stringify({ message: 'Seed complete', inserted }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
`;

writeFileSync('src/pages/api/seed.ts', content);
console.log('Generated seed.ts as GET endpoint');
