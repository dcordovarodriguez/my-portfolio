# Dashi Sushi Prototype

Presentable prototype checkpoint for the Dashi Sushi website. This version preserves the current mobile-first visual direction, real Dashi photography, menu structure, walk-in-first customer flow, subtle animations, and review section so it can be opened locally or deployed as a Vercel preview.

## Project Purpose

This project is a production-oriented prototype for Dashi Sushi in Hillcrest, San Diego. It is intended for client review and preview deployment, not as the final launch build.

The prototype focuses on:

- Mobile-first restaurant browsing
- Real Dashi food, team, exterior, and interior imagery
- Menu discovery and featured dishes
- Walk-in-first visit behavior
- Real review excerpts from Google screenshots provided for the prototype
- Lightweight motion and hover polish with reduced-motion support

## Setup Steps

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The Dashi prototype is also available at:

```text
http://localhost:3000/dashi-sushi
```

## Local Dev Command

```bash
npm run dev
```

The dev command uses the webpack dev server for this checkpoint because it is stable with the current Next.js 16 desktop environment.

## Production Build

```bash
npm run build
```

## Deployment Instructions

### Vercel

Recommended deployment target:

- GitHub repo: `dashi-sushi-prototype`
- Vercel project: `dashi-sushi-prototype`
- Preview URL: `https://dashi-sushi-prototype.vercel.app`

Deploy through Vercel:

1. Push this repo to GitHub as `dashi-sushi-prototype`.
2. In Vercel, create/import a project named `dashi-sushi-prototype`.
3. Keep the default install command:

```bash
npm install
```

4. Keep the default build command:

```bash
npm run build
```

5. Deploy.

No required environment variables are currently needed.

### GitHub Pages

The repo still includes a static export deployment script:

```bash
npm run deploy
```

Vercel is the recommended deployment path for this checkpoint.

## Current Prototype Status

Checkpoint name: `dashi-prototype-v1`

Status:

- Presentable mobile-first prototype
- Root route loads the Dashi prototype
- `/dashi-sushi` route remains available
- Walk-in-first CTAs replace reservation/request-table flows
- Real Dashi menu page-one data is represented
- Real Dashi photos are copied into `public/images/dashi`
- Real review excerpts are included from provided Google review screenshots
- Lint and production build pass

Known caveats:

- Public email still needs confirmation before final launch
- Review text is based on provided screenshots and should be rechecked before client/public release
- Hours should be verified before final launch
- Vercel/GitHub deployment credentials must be available on the machine or through connected services

## Future Work

- Replace any remaining placeholder or uncertain photos with final approved real Dashi photos
- Update menu items, prices, hours, and public contact details before launch
- Refine the Squarespace-inspired layout direction after stakeholder feedback
- Prepare a client feedback version with final copy and verified restaurant details
- Add final analytics, SEO images, favicon set, and production booking/contact decisions
