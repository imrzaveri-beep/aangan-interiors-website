// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// The live address of the site. Change these two values (or set the SITE_URL and
// BASE_PATH environment variables) when the site moves to its own domain, e.g.
// SITE_URL=https://aanganinteriors.in and BASE_PATH=/
const SITE_URL = process.env.SITE_URL || 'https://imrzaveri-beep.github.io';
const BASE_PATH = process.env.BASE_PATH || '/aangan-interiors-website';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
});
