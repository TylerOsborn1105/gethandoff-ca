// Drafts (draft: true) show in `npm run dev`, and in a build only when SHOW_DRAFTS=1.
// Flip draft to false once your own experience is in and the [TYLER] notes are gone.
export const showDrafts = !import.meta.env.PROD || process.env.SHOW_DRAFTS === '1';

function load(mods) {
  return Object.entries(mods)
    .map(([path, mod]) => ({
      slug: path.split('/').pop().replace(/\.md$/, ''),
      data: mod.frontmatter,
      Content: mod.Content,
    }))
    .filter((e) => showDrafts || !e.data.draft)
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
}

export const answers = () => load(import.meta.glob('../content/answers/*.md', { eager: true }));
export const areas = () => load(import.meta.glob('../content/areas/*.md', { eager: true }));
