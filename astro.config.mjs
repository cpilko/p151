// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cpilko.github.io/p151/',
  base: '/p151/',
  vite: {
    plugins: [tailwindcss()]
  },
});