# AGENTS.md — NetLink Persian RTL Modem Store

## Project Overview
Static HTML/CSS/JS website for a premium Persian RTL modem & networking equipment store ("نت‌لینک"). No framework, no build step.

## Tech Stack
- Plain HTML + CSS + vanilla JavaScript
- Vazirmatn font (Google Fonts)
- SVG illustrations for product visuals (no image assets needed)
- nginx:alpine serves static files

## File Structure
- `index.html` — main page with all sections (hero, products, flagship, comparison, FAQ, footer, etc.)
- `css/style.css` — complete styling (dark premium theme, neon green #B8FF00 accents, RTL, responsive)
- `js/app.js` — interactions (sticky header, parallax, scroll reveal, FAQ accordion, cart/wishlist, card tilt)
- `nginx.conf` — server block config
- `nginx.main.conf` — main nginx config (runs workers as root to read 700-perm bind mount)
- `docker-compose.base44.yml` — dev environment

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
Serves on port 3000. Health check: `curl http://localhost:3000/`

## Key Design Decisions
- RTL (`dir="rtl"`) on `<html>`, Vazirmatn font
- Color system: #050505 bg, #111111 cards, #B8FF00 accent (used strategically)
- Product visuals are CSS/SVG constructions (no external image files)
- 3D effects via CSS transforms + parallax JS
- Responsive: sidebar → mobile horizontal category bar, 4-col → 2-col → 1-col grids, bottom mobile nav

## Downloadable packages (netlink-theme.zip / netlink-website.zip)
The `*.zip` packages are **not committed** (see `.gitignore`) — the platform reverts binary
artifacts, which silently 404s the download links. Instead they are generated at runtime:
- `tools/build-zips.py` builds both packages from the repo sources.
- The one-shot `pack` compose service runs it on every `up`, before `web` starts
  (`depends_on: pack: condition: service_completed_successfully`).
- To rebuild manually: `python3 tools/build-zips.py`.
- `nginx.conf` serves `*.zip` with `Content-Disposition: attachment` so browsers download
  instead of rendering.
- After editing `nginx.conf`, reload it: `docker exec app-web-1 nginx -s reload`.

## nginx Permission Note
The sandbox root dir has 700 permissions. nginx workers run as `nginx` user by default and get 403.
Fix: `nginx.main.conf` sets `user root;` and is mounted over `/etc/nginx/nginx.conf`.

## Editing
HTML changes are reflected on browser refresh (nginx serves from disk). Call `reload_preview` after changes.
