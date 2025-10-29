/**
 * Upstash Redis REST API Client
 * Works with Cloudflare Workers/Pages without Node.js dependencies
 */

/**
 * Execute a Redis command via Upstash REST API
 * @param {string} url - Upstash Redis REST URL (e.g., https://xxxx-xxxx.upstash.io)
 * @param {string} token - Upstash Redis REST token
 * @param {string[]} command - Redis command array (e.g., ['SET', 'key', 'value'])
 * @returns {Promise<any>}
 */
async function executeRedisCommand(url, token, command) {
  // Upstash REST API format: POST to base URL with command in body
  const response = await fetch(`${url}/${command[0]}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command.slice(1)),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Upstash Redis error: ${response.status} ${errorText}`);
  }

  const result = await response.json();
  // Upstash REST API returns the result directly, not wrapped in { result: ... }
  return result;
}

/**
 * Upstash Redis client wrapper that mimics KV-like interface
 */
export class UpstashRedis {
  constructor(url, token) {
    this.url = url;
    this.token = token;
    this.allKeys = null; // Cache for all keys
    this.allKeysTimestamp = 0;
    this.keysCacheTTL = 60000; // 1 minute cache for keys list
  }

  /**
   * Put a key-value pair (Redis SET)
   * @param {string} key
   * @param {string} value
   * @returns {Promise<void>}
   */
  async put(key, value) {
    await executeRedisCommand(this.url, this.token, ["SET", key, value]);
  }

  /**
   * Get a value by key (Redis GET)
   * @param {string} key
   * @param {object} options - e.g., { type: 'json' }
   * @returns {Promise<any>}
   */
  async get(key, options = {}) {
    const value = await executeRedisCommand(this.url, this.token, ["GET", key]);

    if (value === null) {
      return null;
    }

    if (options.type === "json") {
      return JSON.parse(value);
    }

    return value;
  }

  /**
   * List keys with a prefix (Redis KEYS or SCAN)
   * @param {object} options - e.g., { prefix: 'event:' }
   * @returns {Promise<{ keys: Array<{ name: string }> }>}
   */
  async list(options = {}) {
    const now = Date.now();

    // Use cached keys if available and not expired
    if (this.allKeys && now - this.allKeysTimestamp < this.keysCacheTTL) {
      return this.filterKeys(this.allKeys, options.prefix);
    }

    // Fetch all keys (Redis KEYS command)
    // Note: For large datasets, you might want to use SCAN instead
    const pattern = options.prefix ? `${options.prefix}*` : "*";
    const keys = await executeRedisCommand(this.url, this.token, [
      "KEYS",
      pattern,
    ]);

    // Cache the result
    this.allKeys = keys.map((key) => ({ name: key }));
    this.allKeysTimestamp = now;

    return this.filterKeys(this.allKeys, options.prefix);
  }

  /**
   * Filter keys by prefix
   * @private
   */
  filterKeys(keys, prefix) {
    if (!prefix) {
      return { keys };
    }

    return {
      keys: keys.filter((key) => key.name.startsWith(prefix)),
    };
  }
}
