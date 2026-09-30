export const prerender = false;

import { drizzle } from 'drizzle-orm/d1';
import { events }  from '../../db/schema';

// Keep in sync with BLOCKED_IPS in public/tracker.js
const BLOCKED_IPS = [
  '125.236.202.162',
  '122.59.31.188',
  '122.58.241.22',
];

function clientIp(request: Request): string | null {
  return request.headers.get('CF-Connecting-IP')
    ?? request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim()
    ?? null;
}

function isBlockedIp(request: Request): boolean {
  const ip = clientIp(request);
  return ip !== null && BLOCKED_IPS.includes(ip);
}

// GET — used by tracker.js (no-cors, no preflight, works through Webflow Cloud proxy)
export async function GET({ request, locals }: { request: Request; locals: App.Locals }) {
  try {
    if (isBlockedIp(request)) return new Response(null, { status: 204 });

    const d1 = locals.runtime.env.DB;
    if (!d1) return new Response('DB not configured', { status: 500 });

    const url = new URL(request.url);
    const db  = drizzle(d1);
    await db.insert(events).values({
      timestamp: new Date().toISOString(),
      sessionId: url.searchParams.get('sessionId'),
      eventType: url.searchParams.get('event'),
      step:      url.searchParams.get('step'),
    });

    return new Response(null, { status: 204 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return new Response(message, { status: 500 });
  }
}

// POST kept for backward compatibility
export async function POST({ request, locals }: { request: Request; locals: App.Locals }) {
  try {
    if (isBlockedIp(request)) return new Response('Event tracked', { status: 200 });

    const d1 = locals.runtime.env.DB;
    if (!d1) return new Response('DB not configured', { status: 500 });

    const body = await request.json() as Record<string, unknown>;
    const db   = drizzle(d1);
    await db.insert(events).values({
      timestamp: new Date().toISOString(),
      sessionId: typeof body.sessionId === 'string' ? body.sessionId : null,
      eventType: typeof body.event     === 'string' ? body.event     : null,
      step:      typeof body.step      === 'string' ? body.step      : null,
    });

    return new Response('Event tracked', { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return new Response(message, { status: 500 });
  }
}
