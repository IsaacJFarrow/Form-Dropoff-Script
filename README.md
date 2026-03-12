# Form Dropoff Tracker

Analytics dashboard for tracking onboarding form drop-off on [whatifweb.co.nz](https://whatifweb.co.nz). Mounted at `/tracker` via Webflow Cloud.

## Stack

- **Framework:** Astro (SSR) with `@astrojs/cloudflare` adapter
- **Hosting:** Webflow Cloud (Cloudflare Workers)
- **Database:** Cloudflare D1 (SQLite) via Drizzle ORM
- **Styles:** What IF Web v2 design system via DevLink (`devlink/global.css`)
- **Charts:** Chart.js with chartjs-plugin-datalabels

## How it works

A small script (`public/tracker.js`) is embedded on the What IF Web onboarding form. It fires events (`formView`, `stepChange`, `formSubmission`) to `/tracker/api/track`, which stores them in D1. The dashboard at `/tracker` reads from `/tracker/api/data` and renders funnel charts and analytics.

## Local development

```bash
npm run build && npx wrangler pages dev dist
```

Open `http://127.0.0.1:8788/tracker`.

For styling/layout work with hot reload (no D1 access):

```bash
npm run dev
```

## Deployment

Push to `main` — Webflow Cloud builds and deploys automatically.

## Database

Migrations are in `drizzle/`. To apply locally:

```bash
npm run db:apply:local
```

To apply remotely:

```bash
npm run db:apply:remote
```

## DevLink

Styles are synced from What IF Web v2 (`6719702b25f42f173940b521`). To re-sync:

```bash
webflow devlink sync --site 6719702b25f42f173940b521
```
