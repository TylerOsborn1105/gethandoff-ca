import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gethandoff.ca',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: { syntaxHighlight: false },
});
