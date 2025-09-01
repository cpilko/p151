# Astro Starter Kit: Basics

```sh
yarn create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Cub Scout Pack 151 Landing Page (Astro + DaisyUI)

This project has been converted into a one-page landing site for Cub Scout Pack 151 using Astro 5, Tailwind CSS v4, and DaisyUI.

Key files to edit
- Site constants and links: src/data/site.ts
- Layout & SEO meta: src/layouts/Layout.astro
- Navigation bar: src/components/NavBar.astro
- Hero: src/components/Hero.astro
- Sections:
  - src/components/sections/WhoWeAre.astro
  - src/components/sections/WhyJoin.astro
  - src/components/sections/Program.astro
  - src/components/sections/GetInvolved.astro
- Contact section (Google Form embed or placeholder): src/components/Contact.astro
- Page assembly: src/pages/index.astro
- Theme/Global styles: src/styles/global.css

How to update placeholders
1) Links (BeAScout and Google Form)
   - Update BEASCOUT_URL and GOOGLE_FORM_URL in src/data/site.ts
   - If GOOGLE_FORM_URL is not '#', the Contact section will automatically embed the form in an iframe

2) Images (swap placeholders later)
   - Temporary placeholders are set via Picsum in src/data/site.ts
   - Replace with real assets placed under:
     - public/logo-pack151.png
     - public/hero.jpg
     - public/gallery-1.jpg
     - public/gallery-2.jpg
   - After uploading real images, update constants in src/data/site.ts to use local paths (e.g., '/hero.jpg')

3) Page text and headings
   - Edit content directly in the section components listed above
   - Ensure only one H1 is present (the Hero); use H2 for section headings to maintain semantic structure

4) Theme
   - DaisyUI theme is set to "bumblebee" in src/styles/global.css
   - To change, edit the themes line:
     @plugin "daisyui" {
       themes: bumblebee --default;
     };

Accessibility and SEO
- Single H1 in the hero for clear page structure
- Semantic H2 headings per section
- Aria labels on navigation
- Alt text added for gallery images
- Meta title/description and JSON-LD Organization schema are included in src/layouts/Layout.astro

Development
- Install: yarn install
- Run dev server: yarn dev (http://localhost:4321)
- Build: yarn build
- Preview build: yarn preview

Deployment
- The site builds to dist/. Deploy that directory to your static hosting provider of choice.
