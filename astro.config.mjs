import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

const site = 'https://gethandoff.ca';

// Area pages marked noindex stay out of the sitemap until they are written out.
function noindexAreaUrls() {
  const dir = path.join(process.cwd(), 'src/content/areas');
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .filter((name) => /^noindex:\s*true\s*$/m.test(fs.readFileSync(path.join(dir, name), 'utf8')))
    .map((name) => `${site}/ai-help/${name.replace(/\.md$/, '')}/`);
}

const hiddenAreas = new Set(noindexAreaUrls());

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !hiddenAreas.has(page),
    }),
  ],
  markdown: { syntaxHighlight: false },
});
