# gethandoff.ca

The Handoff website: homepage, "Plain answers" articles, and area pages.

## Run it on your computer

    npm install
    npm run dev

Open http://localhost:4321. Drafts show here, with a yellow bar at the top.

## Where things live

- Homepage: `src/home.html` (the finished design, one file)
- Articles: `src/content/answers/*.md`
- Area pages: `src/content/areas/*.md`
- Share image: `public/og.png`. Favicon: `public/favicon.svg`

## Publishing an article or area page

1. Open the `.md` file and replace every highlighted `TYLER:` note with your own experience.
2. At the top, change `draft: true` to `draft: false` and update `updated:` to today's date.
3. Commit and push. Vercel rebuilds the site in about a minute.

Drafts never appear on the live site, in the sitemap, or in the footer links.

## Adding a new article

Copy an existing article, rename the file (the file name becomes the web address),
and change the details at the top. `order` controls where it sits in the list.

## Deploying (Vercel)

Put this folder in a GitHub repo and import it in Vercel. It detects Astro on its own.
To see drafts on a Vercel preview, add the environment variable `SHOW_DRAFTS=1`
to the Preview environment only. Never add it to Production.

Then connect gethandoff.ca in Vercel's domain settings, and submit
`https://gethandoff.ca/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.
