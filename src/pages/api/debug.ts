export const prerender = false;

export async function GET({ locals }: { locals: App.Locals }) {
  const runtime = (locals as any).runtime;
  const env = runtime?.env;

  return new Response(JSON.stringify({
    hasRuntime: !!runtime,
    hasEnv: !!env,
    envKeys: env ? Object.keys(env) : [],
    hasKV: !!env?.EVENTS_KV,
  }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
