# Form Drop-off Tracker

A lightweight, serverless application that tracks user interactions with a multi-step form on a website and provides a real-time dashboard to analyze form drop-off rates and conversion.

## How It Works

### Overview

1. **Main website** (e.g. whatifweb.co.nz) loads the tracker script (`tracker.js`). The script watches the multi-step form and **sends** events to the API.
2. **The API** (Cloudflare Pages Functions) receives events via `POST /api/track`, adds a timestamp, and **stores** them in Cloudflare KV.
3. **The dashboard** (e.g. tracker.whatifweb.co.nz) is a separate page that **fetches** all events from the API via `GET /api/data` and displays stats, funnel charts, and a submissions log.

So: the website + tracker **push** data to the API; the dashboard **pulls** data from the API. The tracker script does not read data—only the dashboard does.

### Components

| Component | Location | Role |
|-----------|----------|------|
| **Tracker script** | `public/tracker.js` | Embedded on the main site. Detects form visibility, step changes, and submission; sends events to `POST /api/track`. |
| **API** | `functions/api/[[path]].js` | Serverless API on Cloudflare Pages. `POST /api/track` stores events in KV; `GET /api/data` returns all events (with a 30s cache). |
| **Dashboard** | `public/index.html` | Hosted on the same Pages project. Its inline script calls `GET /api/data` and renders charts (Chart.js) and tables. |

### Hosting & Data

- **Cloudflare Pages** hosts both the static dashboard and the API (Pages Functions). One deployment serves the site and runs the serverless API.
- **Cloudflare KV** stores all tracking data. The API uses the KV namespace `form-db` (configure this in your Pages project settings). Events are stored under keys like `event:<timestamp>:<id>`.

## Tech Stack

- **Hosting & API:** [Cloudflare Pages](https://pages.cloudflare.com/) — static dashboard + serverless API (Pages Functions).
- **Database:** [Cloudflare KV](https://www.cloudflare.com/products/workers-kv/) — key-value store for event data.
- **Frontend:** Plain HTML, CSS, and JavaScript.
- **Charts:** [Chart.js](https://www.chartjs.org/) with the datalabels plugin.

## Live Dashboard

**[https://tracker.whatifweb.co.nz](https://tracker.whatifweb.co.nz)**
