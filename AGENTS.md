# Base44 Dev Environment

## Project
Static single-page HTML app: a Persian (Farsi, RTL) P&L dashboard (`index.html`).
No build system, no backend, no package manager. Chart.js is loaded from a CDN.

## Running
`docker compose -f docker-compose.base44.yml up -d` — serves `index.html` via nginx on port 3000.
The source directory is bind-mounted read-only into the container, so edits to `index.html`
appear on browser refresh (no rebuild needed).

## Files
- `index.html` — main dashboard (the served page)
- `ompf_pnl_dashboard (4).html` — an older copy of the same dashboard (not served by default)

## No secrets required
The app has no external credentials; Chart.js and Google Fonts are loaded from public CDNs.
