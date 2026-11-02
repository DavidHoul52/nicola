# Nicola — counselling website

Static Angular 22 site: every route is prerendered to its own `index.html` at
build time (`outputMode: "static"`), and hosted on Render as a static site
(`render.yaml`). Same setup as `davidhoulistoncounselling`.

Conventions: see `CLAUDE.md` (which imports the shared `../CLAUDE.md`).

## Commands

```bash
npm install
npm start        # dev server on http://localhost:4400
npm run build    # prerender to dist/nicola/browser and write 404.html
```

## Before launch

- Fill in client details in `src/app/site.ts` — name, live domain (`origin`,
  used for canonical links), email, phone, address.
- Set `WEB3FORMS_ACCESS_KEY` in `src/app/site.ts` and enable "Block Spam:
  hCaptcha" for the form in the Web3Forms dashboard. Until the key is set, the
  enquiry form shows an error pointing visitors to the email address.
- Add the GA4 snippet to `src/index.html` (see the comment there).
- Replace the placeholder privacy notice and homepage copy.
- Add a favicon, `public/sitemap.xml`, and a `Sitemap:` line in `public/robots.txt`.

## Adding a page

1. Create `src/app/<page>/` with `.ts`, `.html` and `.css`; namespace all CSS
   with a short page prefix.
2. Register the route in `src/app/app.routes.ts`.
3. Add its title, description and canonical to `SEO_BY_PATH` in `src/app/app.ts`.
# nicola
