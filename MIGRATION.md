# Migration Plan: Form Dropoff Tracker → Webflow Cloud (Astro)

## Status Legend
- ✅ Done
- 🔄 In progress
- ⏳ Pending
- 🔧 Manual step required

---

## Step 1 — Scaffold Astro Project ✅

**What it does:** Replaces the bare `package.json` (no deps, no build system) with a proper Astro framework so Webflow Cloud can build and deploy it.

**Files created/modified:**
- `package.json` — replaced with Astro deps (`astro`, `@astrojs/cloudflare`)
- `astro.config.mjs` — tells Astro to output server-side code with the Cloudflare adapter
- `wrangler.json` — tells Cloudflare/Webflow Cloud which KV namespace to bind (`form_db`)
- `tsconfig.json` — TypeScript config for Astro
- `src/env.d.ts` — TypeScript types for `locals.runtime.env.form_db`

**Still needed:**
- Run `npm install` to pull down packages ← **do this now**

---

## Step 2 — Migrate API Routes ✅

**What it does:** Converts `functions/api/[[path]].js` (Cloudflare Pages Functions format) to Astro server endpoints. Logic is identical — same CORS rules, same `/api/track` POST, same `/api/data` GET.

**Key change:** KV binding access changes from `env['form-db']` → `locals.runtime.env.form_db` (underscore, Workers convention).

**Files created:**
- `src/pages/api/track.ts` — handles `POST /api/track` + CORS preflight
- `src/pages/api/data.ts` — handles `GET /api/data` (public, `*` CORS, 30s cache)

**Old file `functions/api/[[path]].js`** — can be deleted once confirmed working.

---

## Step 3 — Extract What IF Web v2 Styles 🔄

**What it does:** Pulls brand colors, fonts, and utility classes from the What IF Web v2 Webflow site so the dashboard uses them instead of custom Bootstrap-like CSS.

**Source:** Webflow Designer MCP on site `6719702b25f42f173940b521`

**Design tokens extracted:**
| Token | Value |
|-------|-------|
| Brand black | `#0f2756` |
| Brand dark grey | `#2d3f61` |
| Brand light grey | `#f8f1eb` |
| Brand white | `#fff9f3` |
| Brand blue | `#0053ff` |
| Brand light blue | `#bac9e6` |
| Brand green | `#95f99f` |
| Brand red | `#ff6c80` |
| Text primary | `#0f2756` (black) |
| Text secondary | `#2d3f61` (dark grey) |
| Background primary | `#fff9f3` (white) |
| Background secondary | `#f8f1eb` (light grey) |
| Button bg | `#fff9f3` → hover `#0053ff` |
| Button text | `#0053ff` → hover `#fff9f3` |

**Style class names:** ⏳ Still fetching from Designer

---

## Step 4 — Convert Dashboard to index.astro ⏳

**What it does:** Moves `public/index.html` → `src/pages/index.astro`. Same HTML structure and all Chart.js JavaScript stays identical. CSS classes updated to use What IF Web v2 brand tokens.

**Files:**
- `src/pages/index.astro` — new dashboard page
- `public/index.html` — to be deleted (conflicts with Astro output)

---

## Step 4b — Local Dev with D1 ✅

`astro.config.mjs` now has `platformProxy: { enabled: true }` which spins up a local Cloudflare runtime during `astro dev`. This means D1 is available locally — no need for a separate `wrangler dev` command.

To set up the local D1 schema (one time):
```bash
npm run db:setup:local
```

Then `npm run dev` as normal.

---

## Step 5 — Deploy to Webflow Cloud 🔧 Manual

**What it does:** Connects the repo to Webflow Cloud, provisions a KV store, and maps the subdomain.

### 5a — Create Webflow Cloud Project
1. Go to your Webflow workspace → **Cloud** tab
2. Create a new Cloud project
3. Connect it to this Git repo (GitHub)
4. Set build command: `npm run build`
5. Set output directory: `dist`

### 5b — Create D1 Database
1. In Webflow Cloud dashboard → **Storage** → create a D1 database called `form-db`
2. Copy the database ID
3. Paste it into `wrangler.json` replacing `REPLACE_WITH_D1_DATABASE_ID`
4. Run the schema to create the events table:
   ```
   npx wrangler d1 execute form-db --file=schema.sql
   ```

### 5c — Configure Subdomain (tracker.whatifweb.co.nz)
Webflow Cloud gives you a deployment URL (e.g. `form-dropoff-tracker.webflow.io` or similar).
To keep the subdomain instead of using a path:

1. In Webflow Cloud project settings → **Domains** → add custom domain `tracker.whatifweb.co.nz`
2. In your DNS (wherever `whatifweb.co.nz` is managed — likely Cloudflare DNS):
   - Add a `CNAME` record: `tracker` → `<your-webflow-cloud-deployment-url>`
3. Webflow Cloud will handle SSL automatically

> This is the preferred approach — the tracker stays at `tracker.whatifweb.co.nz` and `tracker.js` on the main site doesn't need updating.

### 5d — Migrate Existing KV Data (Optional)
If you want to preserve historical tracking data:
1. Go to Cloudflare dashboard → Workers & Pages → KV → `form-db` namespace
2. Export all `event:*` keys (Cloudflare CLI: `wrangler kv key list --binding=form-db`)
3. Import into the new Webflow Cloud KV namespace

### 5e — Update CORS (if staging domain needed)
The API currently allows: `whatifweb.co.nz` and `www.whatifweb.co.nz`
If you test `tracker.js` from the Webflow `.webflow.io` staging URL, add it to `ALLOWED_ORIGINS` in `src/pages/api/track.ts`.

---

## Webflow Side Checklist

These things live on the main `whatifweb.co.nz` Webflow site and may need attention:

| Item | Status | Notes |
|------|--------|-------|
| `tracker.js` embed | ✅ No change needed | Hosted from this repo at `/tracker.js`. Still points to `https://tracker.whatifweb.co.nz`. |
| Form selector `.multi-step-form_component` | ✅ No change needed | Must exist on Webflow site for tracking to work. |
| Step counter `[data-text="current-step"]` | ✅ No change needed | Must exist on Webflow site. |
| Success wrapper `.form_message-success-wrapper` | ✅ No change needed | Must exist on Webflow site. |
| CORS origin | ✅ No change needed | API already allows `whatifweb.co.nz`. |
| Staging/preview domain | 🔧 Add if needed | Add `.webflow.io` preview URL to `ALLOWED_ORIGINS` if testing tracker from Webflow editor preview. |

---

## Verification Checklist

- [ ] `npm install` completes without errors
- [ ] `npm run dev` — dashboard loads at `localhost:4321`
- [ ] `POST /api/track` stores an event in KV
- [ ] `GET /api/data` returns events as JSON
- [ ] Dashboard charts render correctly
- [ ] Subdomain CNAME resolves to Webflow Cloud deployment
- [ ] `tracker.js` on `whatifweb.co.nz` sends events to new endpoint
- [ ] Historical KV data visible in dashboard (if migrated)
