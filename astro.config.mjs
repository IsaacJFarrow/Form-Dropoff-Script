import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // Enables local D1/KV/R2 access during `astro dev`
    platformProxy: { enabled: true },
  }),
});
