const ALLOWED_ORIGINS = [
    'https://whatifweb.co.nz',
    'https://www.whatifweb.co.nz',
    // Add your webflow.io domain here if you test on it, e.g., 'https://your-site.webflow.io'
];

/**
 * A generic error response function
 * @param {string} message The error message
 * @param {number} status The HTTP status code
 * @returns {Response}
 */
const errorResponse = (message, status = 400) => {
    return new Response(JSON.stringify({ error: message }), {
        status: status,
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': ALLOWED_ORIGINS[0], // Default origin
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
};

/**
 * Handles POST requests to /api/track
 * @param {import("@cloudflare/workers-types").Request} request
 * @param {import("@cloudflare/workers-types").KVNamespace} kvNamespace
 * @returns {Promise<Response>}
 */
async function handleTrackRequest(request, kvNamespace) {
    try {
        const eventData = await request.json();
        if (!eventData || typeof eventData !== 'object') {
            return errorResponse('Invalid JSON payload');
        }

        const key = `event:${new Date().toISOString()}:${Math.random().toString(36).substr(2, 9)}`;
        await kvNamespace.put(key, JSON.stringify(eventData));

        console.log('Tracking event received:', eventData);
        return new Response('Event tracked', { 
            status: 200,
            headers: { 'Access-Control-Allow-Origin': request.headers.get('Origin') }
        });

    } catch (err) {
        console.error('Error saving tracking event:', err);
        return errorResponse('Error tracking event', 500);
    }
}

/**
 * Handles GET requests to /api/data
 * @param {import("@cloudflare/workers-types").KVNamespace} kvNamespace
 * @returns {Promise<Response>}
 */
async function handleDataRequest(kvNamespace) {
    try {
        const list = await kvNamespace.list({ prefix: 'event:' });
        const promises = list.keys.map(key => kvNamespace.get(key.name, { type: 'json' }));
        const data = await Promise.all(promises);
        
        return new Response(JSON.stringify(data.filter(Boolean)), {
            status: 200,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' // Data is safe to be public
            },
        });

    } catch (err) {
        console.error('Error fetching tracking data:', err);
        return errorResponse('Error fetching data', 500);
    }
}

/**
 * The main request handler for the Cloudflare Pages function.
 * @param {EventContext<any, any, any>} context 
 * @returns 
 */
export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');

    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
        if (origin && ALLOWED_ORIGINS.includes(origin)) {
            return new Response(null, {
                status: 204,
                headers: {
                    'Access-Control-Allow-Origin': origin,
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Max-Age': '86400', // Cache preflight for 1 day
                },
            });
        }
        // Handle invalid preflight requests
        return new Response('Invalid preflight request', { status: 403 });
    }

    // This makes the KV namespace available that you'll create in the Cloudflare dashboard.
    const kvNamespace = env.TRACKING_DB;
    if (!kvNamespace) {
        return errorResponse("KV Namespace not configured", 500);
    }
    
    // Simple routing based on path and method
    const path = url.pathname.replace('/api/', '');

    if (path === 'track' && request.method === 'POST') {
        return handleTrackRequest(request, kvNamespace);
    }

    if (path === 'data' && request.method === 'GET') {
        return handleDataRequest(kvNamespace);
    }

    return new Response('Not Found', { status: 404 });
} 