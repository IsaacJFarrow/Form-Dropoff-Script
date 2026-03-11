export const prerender = false;

import { drizzle } from 'drizzle-orm/d1';
import { asc }     from 'drizzle-orm';
import { events }  from '../../db/schema';

// In-memory cache — persists while the Worker isolate stays warm
let cachedData: string | null = null;
let cachedAt = 0;
const CACHE_DURATION_MS = 30 * 1000;

export async function GET({ locals }: { locals: App.Locals }) {
  try {
    const d1 = locals.runtime.env.DB;
    if (!d1) {
      return new Response(JSON.stringify({ error: "D1 database 'DB' not configured." }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    const now = Date.now();
    if (cachedData && now - cachedAt < CACHE_DURATION_MS) {
      return new Response(cachedData, {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    const db   = drizzle(d1);
    const rows = await db.select().from(events).orderBy(asc(events.timestamp));

    // Reshape to match what the dashboard JS expects
    const payload = JSON.stringify(rows.map(r => ({
      timestamp: r.timestamp,
      sessionId: r.sessionId,
      event:     r.eventType,
      step:      r.step,
    })));

    cachedData = payload;
    cachedAt   = now;

    return new Response(payload, {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}
