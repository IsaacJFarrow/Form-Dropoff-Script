export const prerender = false;

let cachedData: string | null = null;
let cachedAt = 0;
const CACHE_DURATION_MS = 30 * 1000;

export async function GET({ locals }: { locals: App.Locals }) {
  try {
    const kv = locals.runtime.env.EVENTS_KV;
    if (!kv) {
      return new Response(JSON.stringify({ error: 'KV not configured.' }), {
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

    // Single list call returns all keys + metadata — no N+1 fetches needed
    const listed = await kv.list({ prefix: 'event:' });
    const events = listed.keys
      .map((k: { name: string; metadata: unknown }) => k.metadata)
      .sort((a: any, b: any) => (a.timestamp > b.timestamp ? 1 : -1));

    const payload = JSON.stringify(events);
    cachedData = payload;
    cachedAt = now;

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
