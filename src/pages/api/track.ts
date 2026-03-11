export const prerender = false;

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
    const kv = locals.runtime.env.EVENTS_KV;
    if (!kv) {
      return new Response(JSON.stringify({ error: 'KV not configured.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const body = await request.json() as Record<string, unknown>;
    const timestamp = new Date().toISOString();
    const key = `event:${timestamp}:${Math.random().toString(36).substr(2, 9)}`;

    await kv.put(key, '', {
      metadata: {
        timestamp,
        sessionId: typeof body.sessionId === 'string' ? body.sessionId : null,
        event:     typeof body.event     === 'string' ? body.event     : null,
        step:      typeof body.step      === 'string' ? body.step      : null,
      },
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
