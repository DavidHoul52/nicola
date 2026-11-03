# CLAUDE.md — nicola

Shared conventions for all client websites live in the parent file and apply here:

@../CLAUDE.md

## Design overrides (from the client's homepage mockup)

These replace the shared palette, type and button rules in `../CLAUDE.md` for this site only:

- **Colours:** `--navy` (headings, primary buttons, links), `--ink-soft` (body text), `--cream` / `--cream-light` (light sections), `--mist` (pale blue band), `--slate` / `--slate-dark` (dark band, footer). `--accent` (red) and `--dot` (blue) are decorative only — `--accent` fails AA for body text. There is no sage or terracotta on this site.
- **Type:** `--font-heading` / `--font-body` are an Optima system stack — no web fonts.
- **Buttons:** pill-shaped (`border-radius: 999px`). Variants: `.btn-primary` (solid navy), `.btn-outline` (navy outline on light), `.btn-outline-light` (white outline on dark bands). Calls to action use an outline button with an `aria-hidden` → arrow.
- **Illustrations** are abstract decorative art, so their placeholder `<img>` takes `alt=""`, with an HTML comment describing the intended artwork. Photos and meaningful images still follow the shared rule (description in `alt`).

## Project-specific notes

- Client details (name, domain, email, phone, address) and the Web3Forms key live in `src/app/site.ts` — read them from there, never hard-code them in templates.
- Page prefixes: `.lnd-` homepage, `.abt-` about, `.hch-` how I can help, `.cpl-` couples therapy, `.fees-` fees and practicalities, `.faq-` FAQs, `.con-` contact, `.nf-` 404, `.privacy` privacy notice.
- Inner pages share the global page layout in `src/styles.css` — `.page-hero` (title band + decorative art), `.page-section` / `.page-section-alt`, `.prose` and `.dot-list`. Use these before adding page CSS.
- Header and footer nav both render `navLinks` in `app.ts`.
- Unlike the shared default, the app shell does **not** render the enquiry form: `<app-enquiry />` lives on the Contact page only (also served at `/enquiry-received`). "Get in touch" calls to action link to `/contact`.
- Draft copy awaiting the client is marked `TODO(client)`; unknown fees and policies show "To be confirmed" rather than invented figures.
- New pages also need an entry in `SEO_BY_PATH` (`src/app/app.ts`), or they prerender with no canonical.
- Dev server runs on port 4401 (`npm start`).
