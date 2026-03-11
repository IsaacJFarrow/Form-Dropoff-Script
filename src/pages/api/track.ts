export const prerender = false;

import { drizzle } from 'drizzle-orm/d1';
import { events }  from '../../db/schema';

const ALLOWED_ORIGINS = [
  'https://whatifweb.co.nz',
  'https://www.whatifweb.co.nz',
];

export async function OPTIONS({ request }: { request: Request }) {
  const origin = request.headers.get('Origin');
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin',
      },
    });
  }
  return new Response('Invalid preflight origin.', { status: 403 });
}

export async function POST({ request, locals }: { request: Request; locals: App.Locals }) {
  const origin = request.headers.get('Origin');
  const corsHeaders: Record<string, string> = { 'Vary': 'Origin' };
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    corsHeaders['Access-Control-Allow-Origin'] = origin;
  }

  try {
    const d1 = locals.runtime.env.DB;
    if (!d1) {
      return new Response(JSON.stringify({ error: "D1 database 'DB' not configured." }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const body = await request.json() as Record<string, unknown>;
    if (!body || typeof body !== 'object') {
      return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const db = drizzle(d1);
    await db.insert(events).values({
      timestamp: new Date().toISOString(),
      sessionId: typeof body.sessionId === 'string' ? body.sessionId : null,
      eventType: typeof body.event     === 'string' ? body.event     : null,
      step:      typeof body.step      === 'string' ? body.step      : null,
    });

    return new Response('Event tracked', { status: 200, headers: corsHeaders });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
}
