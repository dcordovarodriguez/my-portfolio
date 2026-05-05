# TritonNav Portfolio

TritonNav Portfolio is a Next.js App Router site for Diego Cordova Rodriguez. It works as both a professional portfolio and a design-class project submission, with TritonNav featured as the flagship product concept.

## What It Does

- Introduces Diego Cordova Rodriguez as a UCSD Cognitive Science Design/HCI student
- Showcases portfolio projects through reusable, data-driven project pages
- Features TritonNav, a UCSD campus navigation MVP focused on buildings, entrances, rooms, and college areas
- Uses dynamic route-generated pages for both portfolio projects and TritonNav buildings

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- lucide-react
- GitHub
- Vercel-ready deployment setup

## Pages Included

- `/` home page
- `/projects` project index
- `/projects/[slug]` dynamic project detail page
- `/tritonnav` TritonNav product page
- `/tritonnav/buildings` building directory
- `/tritonnav/buildings/[id]` dynamic building detail page
- `/about` about page
- `/contact` contact page

## Assignment Requirements Satisfied

- Built with Next.js in a meaningful way
- Includes more than three pages
- Includes route-generated pages with `generateStaticParams`
  - `/projects/[slug]`
  - `/tritonnav/buildings/[id]`
- Ready to submit with a GitHub source link and hosted deployment link

## Dynamic Routes Explained

Project case studies are stored in `src/data/projects.ts` and rendered through `/projects/[slug]`.

Building data for TritonNav is stored in `src/data/buildings.ts` and rendered through `/tritonnav/buildings/[id]`.

Both route types use `generateStaticParams`, which means the site can statically export every project and building page at build time.

## File Structure

```text
src/
  app/
    page.tsx
    projects/
      page.tsx
      [slug]/page.tsx
    tritonnav/
      page.tsx
      buildings/
        page.tsx
        [id]/page.tsx
    about/page.tsx
    contact/page.tsx
  components/
    Navbar.tsx
    Footer.tsx
    Hero.tsx
    ProjectCard.tsx
    BuildingCard.tsx
    BuildingDirectory.tsx
    SectionHeading.tsx
    CTAButton.tsx
    Tag.tsx
    FeatureCard.tsx
  data/
    projects.ts
    buildings.ts
  lib/
    utils.ts
```

## How To Run Locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

## Deployment Instructions

### Vercel

1. Push the repo to GitHub.
2. Import the repository into Vercel.
3. Keep the default build command:

```bash
npm run build
```

4. Deploy.

This is the recommended path for eventually replacing the current Wix Studio version of diegocordova.net.

### GitHub Pages

This repo also keeps a GitHub Pages export path for the existing `my-portfolio` repository:

```bash
npm run deploy
```

That script sets the GitHub Pages base path and publishes the static `out/` folder to the `gh-pages` branch.

## Future Plans For TritonNav

- Expand the building dataset beyond the starter set
- Add route previews between buildings and lecture spaces
- Include accessibility, elevation, and entrance-condition notes
- Explore user testing with first-years, transfers, and campus visitors
- Turn the building directory into a richer campus wayfinding system over time
