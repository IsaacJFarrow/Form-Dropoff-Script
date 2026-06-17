export const prerender = false;

import { drizzle } from 'drizzle-orm/d1';
import { like }    from 'drizzle-orm';
import { events }  from '../../db/schema';

// ⚠️ ONE-OFF: clears only the ROI calculator events (event_type LIKE 'roi%').
// Token-gated. Uses GET because Astro's CSRF checkOrigin rejects cross-proxy
// POSTs on Webflow Cloud. DELETE THIS FILE once the ROI data is reset, then redeploy.
const RESET_TOKEN = 'roi-reset-9f3a2c7b';

export async function GET({ request, locals }: { request: Request; locals: App.Locals }) {
  const url = new URL(request.url);
  if (url.searchParams.get('token') !== RESET_TOKEN) {
    return new Response('Forbidden', { status: 403 });
  }

  const d1 = locals.runtime.env.DB;
  if (!d1) return new Response('DB not configured', { status: 500 });

  try {
    const db     = drizzle(d1);
    const result = await db.delete(events).where(like(events.eventType, 'roi%'));
    const deleted = (result as { meta?: { changes?: number } }).meta?.changes ?? null;
    return new Response(JSON.stringify({ ok: true, deleted }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
