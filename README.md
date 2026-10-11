# Ovnistudio website

Static site built with [Astro](https://astro.build) and Three.js. English lives at `/`, French at `/fr/`.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/, ready for Netlify, Vercel, Cloudflare Pages or any host
```

## Where to edit things

| What | File |
| --- | --- |
| Studio facts, stats, clients, services, case studies, films, reviews, FAQ, blog | `src/data/site.ts` (every `PLACEHOLDER` / `[ ]` value) |
| Interface text (EN + FR) | `src/i18n.ts` |
| Colors, fonts, spacing | `src/styles/global.css` (`:root` tokens) |
| 3D hero object | `src/data/hero3d.ts` |

## Your logo in 3D

1. Put your logo SVG at `public/3d/logo.svg` (or a model at `public/3d/logo.glb`).
2. In `src/data/hero3d.ts` set `mode: 'svg'` (or `'glb'` with `src: '/3d/logo.glb'`).

The SVG is extruded and rendered in the same purple-tinted chrome as the placeholder stars.

## Videos

Add a film file to `public/films/` and set `video: '/films/name.mp4'` on that film in `src/data/site.ts`.
For hover previews on work cards, set `preview` (short muted mp4) and `thumbnail` (image) on the case.

## Contact form

Set `studio.formEndpoint` in `src/data/site.ts` to a Formspree (or similar) endpoint.
