# Form Drop-off Tracker

This project is a lightweight, serverless application designed to track user interactions with a multi-step form on a website. It provides a real-time dashboard to analyze form drop-off rates and user progression.

## Tech Stack

The application is built using a modern JAMstack architecture for high performance and low cost.

-   **Hosting & API:** [Cloudflare Pages](https://pages.cloudflare.com/) hosts the static dashboard and runs the serverless API functions.
-   **Database:** [Cloudflare KV](https://www.cloudflare.com/products/workers-kv/) provides a fast, globally distributed key-value store for all tracking data.
-   **Frontend:** The tracker script and dashboard are built with plain `HTML`, `CSS`, and `JavaScript`.
-   **Charting:** [Chart.js](https://www.chartjs.org/) is used to render the interactive charts on the dashboard.

## Live Dashboard

The dashboard for this project is available at: **[https://tracker.whatifweb.co.nz](https://tracker.whatifweb.co.nz)** 