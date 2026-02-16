# Kushagra Portfolio

A modern React + Vite portfolio featuring animated UI, project highlights, SEO improvements, accessibility enhancements, and PWA support.

## Setup

Install dependencies and run locally:

- `npm install`
- `npm run dev`

## Environment variables

Create or update `.env`:

- `VITE_WEB3FORMS_ACCESS_KEY` → required for contact form submissions
- `VITE_ANALYTICS_DOMAIN` → optional analytics domain override

## Production features included

- SEO: OpenGraph, Twitter cards, canonical URL, JSON-LD schema
- Discoverability: `robots.txt` and `sitemap.xml`
- Accessibility: skip link, focus-visible support, reduced-motion behavior
- Performance: lazy-loaded visual components, mobile/reduced-motion effect fallback
- Contact: API-driven form submission with success/error states + honeypot anti-spam
- PWA: `manifest.webmanifest`, offline fallback page, service worker caching
- Analytics: lightweight event tracking helpers integrated with Plausible script

## Notes

- Update domain references (`kushagra-portfolio.vercel.app`) if you deploy elsewhere.
- Replace placeholder project demo links in `src/data/siteData.js` when demos are live.
