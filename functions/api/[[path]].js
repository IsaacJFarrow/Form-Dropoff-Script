const ALLOWED_ORIGINS = [
    'https://whatifweb.co.nz',
    'https://www.whatifweb.co.nz',
    // Add your webflow.io domain here if you test on it, e.g., 'https://your-site.webflow.io'
];

// In-memory cache for /api/data endpoint
let cachedData = null;
let cachedAt = 0;
const CACHE_DURATION_MS = 30 * 1000; // 30 seconds

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
    let eventData = await request.json(); // Use let to allow modification
    if (!eventData || typeof eventData !== 'object') {
        return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // Add a server-side timestamp to the event object
    eventData.timestamp = new Date().toISOString();

    const key = `event:${eventData.timestamp}:${Math.random().toString(36).substr(2, 9)}`;
    await kvNamespace.put(key, JSON.stringify(eventData));
    console.log('Tracking event received:', eventData);
    return new Response('Event tracked', { status: 200 });
}

/**
 * Handles GET requests to /api/data
 * @param {import("@cloudflare/workers-types").KVNamespace} kvNamespace
 * @returns {Promise<Response>}
 */
async function handleDataRequest(kvNamespace) {
    const now = Date.now();
    if (cachedData && (now - cachedAt < CACHE_DURATION_MS)) {
        // Return cached response
        return new Response(cachedData, {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    const list = await kvNamespace.list({ prefix: 'event:' });
    const promises = list.keys.map(key => kvNamespace.get(key.name, { type: 'json' }));
    const data = await Promise.all(promises);
    const filtered = JSON.stringify(data.filter(Boolean));
    // Update cache
    cachedData = filtered;
    cachedAt = now;
    return new Response(filtered, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

/**
 * The main request handler for the Cloudflare Pages function.
 * @param {EventContext<any, any, any>} context 
 * @returns 
 */
export async function onRequest(context) {
    const { request, env } = context;
    const origin = request.headers.get('Origin');

    // Handle CORS Preflight requests
    if (request.method === 'OPTIONS') {
        if (origin && ALLOWED_ORIGINS.includes(origin)) {
            // Handle valid preflight request
            return new Response(null, {
                status: 204, // No Content
                headers: {
                    'Access-Control-Allow-Origin': origin,
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Max-Age': '86400', // Cache for 1 day
                    'Vary': 'Origin',
                },
            });
        } else {
            // Handle invalid preflight request
            return new Response('Invalid preflight origin.', { status: 403 });
        }
    }

    // Handle actual API requests (GET, POST, etc.)
    let response;
    const corsHeaders = { 'Vary': 'Origin' };

    // Set CORS headers for non-preflight requests
    if (origin && ALLOWED_ORIGINS.includes(origin)) {
        corsHeaders['Access-Control-Allow-Origin'] = origin;
    }
    
    try {
        const url = new URL(request.url);
        const kvNamespace = env['form-db'];

        if (!kvNamespace) {
            throw new Error("KV Namespace 'form-db' not configured. Please check your Cloudflare Pages settings.");
        }

        const path = url.pathname.replace('/api/', '');

        if (path === 'track' && request.method === 'POST') {
            response = await handleTrackRequest(request, kvNamespace);
        } else if (path === 'data' && request.method === 'GET') {
            response = await handleDataRequest(kvNamespace);
            // Data dashboard is safe to be viewed from anywhere
            corsHeaders['Access-Control-Allow-Origin'] = '*';
        } else {
            response = new Response('Not Found', { status: 404 });
        }

    } catch (err) {
        console.error('An error occurred:', err);
        const errorMessage = err.message || 'Internal Server Error';
        response = new Response(JSON.stringify({ error: errorMessage, details: err.stack }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // Attach CORS headers to the response
    const newHeaders = new Headers(response.headers);
    for (const [key, value] of Object.entries(corsHeaders)) {
        newHeaders.set(key, value);
    }

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
    });
} 