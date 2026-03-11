# The Leadership Circle

Marketing site for The Leadership Circle — a leadership coaching and team development organisation that partners with high-performing organisations to build strong cultures.

## Architecture

The entire site lives in a single HTML file (`site/the-leadership-circle.html`) with inline CSS and JavaScript. This is intentional:

- **Instant deployment** — one file to ship, no build step, no dependency tree
- **Fast page loads** — single request, no render-blocking imports, no framework overhead
- **Zero dependencies** — no Node modules, no bundler config, no package manager

## Tech Stack

- HTML5, CSS3 (custom properties, grid, flexbox, keyframe animations)
- Vanilla JavaScript (Intersection Observer, carousel, modals)
- Google Fonts (DM Serif Display, DM Sans)
- Docker + Nginx Alpine for production serving

## Local Development

Open the HTML file directly in a browser:

```sh
open site/the-leadership-circle.html
```

Or run via Docker:

```sh
docker build -t tlc-site .
docker run -p 8080:80 tlc-site
```

Then visit `http://localhost:8080`.

## Deployment

The Dockerfile builds an Nginx Alpine container that serves the static site on port 80. The Nginx config includes gzip compression, security headers, and image caching (30 days for media, 1 hour for HTML).

## Project Structure

```
├── Dockerfile
├── nginx.conf
└── site/
    ├── the-leadership-circle.html   # Full site (HTML + CSS + JS)
    ├── Logos/                        # Client/partner logos (.webp)
    └── Photos/                       # Site imagery (.webp, .jpg)
```
