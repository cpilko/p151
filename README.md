# Pack 151 Website (Astro 5 + Tailwind CSS v4 + DaisyUI)

One-page marketing site for Cub Scout Pack 151. Built with Astro 5, Tailwind CSS v4, and DaisyUI. Configured to auto-deploy to GitHub Pages on push to the master branch.

Live URL (GitHub Pages): https://cpilko.github.io/p151/

Note: This project is currently configured for a GitHub Project Pages site published at /p151/ (subpath). If you later move to a custom domain, see the “Switching to a custom domain” section.


## Quick start

Prerequisites:
- Node.js 20.x (LTS)
- Yarn (recommended)

Install and run locally:
```sh
yarn install
yarn dev
```
- Local dev: http://localhost:4321
- Build production:
```sh
yarn build
```
- Preview production build:
```sh
yarn preview
```


## Content model

Most copy is authored in Markdown files under src/data. Section components read their copy via frontmatter and Content slots.

Markdown sources:
- src/data/site.md — Site-wide title/description/themeColor (SEO + theme color)
- src/data/nav.md — Nav brand label, menu labels, button text
- src/data/hero.md — Hero headings and CTA button labels
- src/data/who-we-are.md — Who We Are section body + optional gallery alt text
- src/data/why-join.md — Why Join section body
- src/data/program.md — Program section body
- src/data/get-involved.md — Get Involved section body
- src/data/contact.md — Contact section body (or use Google Form embed, see below)
- src/data/footer.md — Footer location and “Back to top” text

Site constants and asset paths:
- src/data/site.ts — SITE_TITLE, SITE_DESC, URLs (BeAScout, Google Form), and base-aware asset paths for images. Also exposes anchor IDs used by in-page navigation.

Page structure:
- src/pages/index.astro — Assembles all sections within the layout

Layout and components:
- src/layouts/Layout.astro — Global head tags, SEO, JSON-LD, and global stylesheet import
- src/components/NavBar.astro — Top navigation (desktop and mobile)
- src/components/Hero.astro — Hero section with background image + CTAs
- src/components/sections/WhoWeAre.astro
- src/components/sections/WhyJoin.astro
- src/components/sections/Program.astro
- src/components/sections/GetInvolved.astro
- src/components/Contact.astro — Embeds a Google Form if GOOGLE_FORM_URL is set, otherwise shows placeholder
- src/components/Footer.astro — Footer with location and back-to-top link

Global styles and theme:
- src/styles/global.css — Tailwind v4 + DaisyUI theme definition


## Images

Public assets live in the public/ directory, for example:
- public/CubScout_4K-Logo-CSBC.png (logo)
- public/hero.jpg (hero background)
- public/2019-06-12-RM-0315 copy1_photo_CSBC.jpg
- public/AT4A3393-photo-CSBC.JPG
- public/favicon.svg

Update the image constants in src/data/site.ts. This project uses a base-aware asset() helper that automatically prefixes the configured site base path, so assets work correctly whether deployed at a subpath (/p151/) or the root (/).


## Theming

Tailwind v4 and DaisyUI are configured via src/styles/global.css.

- Primary theme is defined as "p151-bumblebee".
- To adjust colors, spacing, or radius, edit the variables under:
  @plugin "daisyui/theme" {
    name: "p151-bumblebee";
    ...
  }

Fonts are loaded from Google Fonts (Bubblegum Sans for headings, Open Sans for body).


## External links and embeds

- BeAScout link: Update BEASCOUT_URL in src/data/site.ts.
- Google Form embed: Update GOOGLE_FORM_URL in src/data/site.ts.
  - If set (not '#'), the Contact section auto-embeds the form.


## SEO and social metadata

- Canonical title/description/themeColor come from src/data/site.md (frontmatter).
- Additional SITE_TITLE and SITE_DESC fallbacks live in src/data/site.ts.
- Open Graph/Twitter image uses HERO_IMAGE by default.
- JSON-LD Organization schema is emitted from src/layouts/Layout.astro.
- robots.txt and sitemap.xml live in public/ and are currently set for GitHub Pages URLs.


## Deployment (GitHub Pages via GitHub Actions)

This repo is configured to auto-deploy on push to master using .github/workflows/deploy.yml.

Current configuration highlights:
- Branch trigger: master
- Node: 20
- Build: withastro/action@v3 builds and uploads the Pages artifact
- Deploy: actions/deploy-pages@v4 publishes to GitHub Pages
- Concurrency enabled to prevent overlapping deployments
- public/.nojekyll present to avoid Jekyll processing issues

Astro configuration (astro.config.mjs):
- site: 'https://cpilko.github.io/p151/'
- base: '/p151/'
This ensures all built CSS/JS/image links resolve correctly under the /p151/ subpath used by GitHub Project Pages.

First-time setup checklist (one-time repository settings):
1) In GitHub, go to Settings → Pages.
2) Under “Build and deployment”, set “Source” to “GitHub Actions”.
3) Push to master. The workflow will build and deploy automatically.
4) After the first successful deploy, your site should be available at:
   https://cpilko.github.io/p151/

Manual deploy notes:
- You can build locally with yarn build. The output goes to dist/.
- If you manually host this somewhere under /p151/, keep base: '/p151/'.
- If you host at the domain root (e.g., custom domain), see the section “Switching to a custom domain” to update site and base.


## Why CSS didn’t load before (root-cause and fix)

Common symptom: On GitHub Pages, CSS/JS 404s or the page renders unstyled.

Root cause: GitHub Project Pages hosts your site under a subpath (e.g., /p151/). If Astro isn’t configured with base: '/p151/', the generated HTML will reference assets at /_astro/... (domain root) instead of /p151/_astro/..., causing 404s.

Fixes applied in this repo:
- astro.config.mjs now includes site: 'https://cpilko.github.io/p151/' and base: '/p151/'.
- All internal links and assets are base-aware:
  - Favicon in src/layouts/Layout.astro uses import.meta.env.BASE_URL.
  - The home link in src/components/NavBar.astro uses import.meta.env.BASE_URL.
  - Assets in src/data/site.ts use an asset() helper that prefixes import.meta.env.BASE_URL.
- public/.nojekyll added to avoid GH Pages processing issues.
- public/robots.txt and public/sitemap.xml updated to use the GitHub Pages URL.

How to verify:
1) yarn build
2) Inspect dist/index.html for links like:
   <link rel="stylesheet" href="/p151/_astro/...css">
3) If you see /_astro/... without /p151/, your base isn’t set correctly.


## Switching to a custom domain (pack151.org)

If/when you move to a custom domain, update these:

1) astro.config.mjs
   - site: 'https://pack151.org'
   - base: '/' (or remove base entirely)

2) src/data/site.ts
   - SITE_URL = 'https://pack151.org'

3) public/robots.txt
   - Sitemap: https://pack151.org/sitemap.xml

4) public/sitemap.xml
   - Update the <loc> to https://pack151.org/

5) GitHub → Settings → Pages
   - Set your Custom domain to pack151.org (and configure DNS)
   - Re-run deployment by pushing to master

After these changes, assets will be emitted under / (root) instead of /p151/, and CSS/JS will load correctly on the custom domain.


## Repository structure

- public/
  - Static files copied as-is. Includes robots.txt, sitemap.xml, images, favicon.svg, and .nojekyll.
- src/
  - assets/ — Static imported assets (if any)
  - components/ — Astro components for NavBar, Hero, Sections, Contact, Footer
  - layouts/ — Layout.astro (SEO, head tags, global CSS import)
  - pages/ — index.astro (single-page site assembly)
  - styles/ — global.css (Tailwind v4 + DaisyUI theme)
  - data/ — Markdown content and site constants (TypeScript)
- astro.config.mjs — Astro config (site + base for GitHub Pages)
- package.json — Scripts and dependencies
- tsconfig.json — TypeScript config
- .github/workflows/deploy.yml — GitHub Actions workflow for Pages


## Maintenance tasks

Typical edits:
- Change nav/menu labels or brand text: src/data/nav.md
- Update hero title/subtitle/buttons: src/data/hero.md
- Edit section copy: src/data/*.md for each section
- Update links (BeAScout / Google Form): src/data/site.ts
- Change images: put new files in public/ and update constants in src/data/site.ts
- Adjust theme colors or fonts: src/styles/global.css

Release process:
- Create a new branch, commit changes, open PR to master.
- Merge → GitHub Action builds and deploys automatically.
- Verify Pages deployment (Actions tab or Settings → Pages).


## Troubleshooting

- CSS not loading / unstyled page
  - Cause: base path mismatch.
  - Fix: For GitHub Pages project site, set base: '/p151/' and site: 'https://cpilko.github.io/p151/' in astro.config.mjs, then rebuild.

- Logo or favicon 404
  - Ensure favicon href uses import.meta.env.BASE_URL in src/layouts/Layout.astro.
  - Ensure LOGO_IMAGE and other images come from the asset() helper in src/data/site.ts.

- Images not showing after rename
  - Place images in public/.
  - Update the corresponding constants in src/data/site.ts.
  - Rebuild and redeploy.

- Wrong canonical or share URLs
  - Update SITE_URL in src/data/site.ts to the correct production origin.
  - Update site in astro.config.mjs for absolute URL generation.

- Stale sitemap or robots
  - Update public/sitemap.xml and public/robots.txt accordingly.
  - Rebuild and redeploy.


## Scripts

- yarn dev — Start local dev server
- yarn build — Build static site to dist/
- yarn preview — Preview the production build locally
- yarn astro … — Run Astro CLI


## License

MIT
