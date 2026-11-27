// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config.ts';

export default defineConfig({
  site: SITE.url,
  integrations: [sitemap({ filter: (page) => !['/plaquette', '/mentions-legales', '/confidentialite', '/merci'].some((p) => page.includes(p)) })],
});
