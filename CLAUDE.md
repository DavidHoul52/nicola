# CLAUDE.md — nicola

Shared conventions for all client websites live in the parent file and apply here:

@../CLAUDE.md

## Design overrides (from the client's homepage mockup)

These replace the shared palette, type and button rules in `../CLAUDE.md` for this site only:

- **Colours:** `--navy` (headings, primary buttons, links), `--ink-soft` (body text), `--cream` / `--cream-light` (light sections), `--mist` (pale blue band), `--slate` / `--slate-dark` (dark band, footer). `--accent` (red) and `--dot` (blue) are decorative only — `--accent` fails AA for body text. There is no sage or terracotta on this site.
- **Section colour themes:** five site-wide classes in `src/styles.css`, named after the section background. Add one to a section (with `.page-section` or a page's own section class) and it sets the background plus the heading, body, link, button, list-dot and focus colours inside it — don't recolour text in page CSS on top of a theme. Which section gets which theme is the client's call; don't assign them unprompted.

  | Class | Background | Body text | Headings | Links, buttons, focus |
  |---|---|---|---|---|
  | `.section-linen-cream` | `--linen-cream` #EDE5D3 | `--ink-dark` (13.9) | `--deep-teal-dark` (6.0) | `--vermilion` (4.8) |
  | `.section-pale-teal` | `--pale-teal` #DCEBE5 | `--ink-dark` (14.1) | `--deep-teal-dark` (6.1) | `--warm-grey` (7.6) — also captions, small print |
  | `.section-blush-pink` | `--blush-pink` #F4DFE3 | `--ink-dark` (13.7) | `--plum` (7.9) | `--plum` (7.9); list dots `--warm-grey` (7.4) |
  | `.section-deep-teal` | `--deep-teal` #2E6F64 | `--off-white` (5.2) | `--off-white` | `--off-white`; `--ochre-light` (3.8) is for 24px+ headings and decoration only, never body text or links |
  | `.section-dark-plum` | `--dark-plum` #3F2A47 | `--cream-warm` (10.8) | `--ochre` (6.8) | `--pink` (6.8) |

  Numbers are contrast ratios against the background. Each theme exposes `--section-bg`, `--section-text`, `--section-heading`, `--section-accent` (AA for small text) and `--section-highlight` (decorative, large text only) — use these in page CSS for anything custom inside a themed section. A page class that sets its own `background` (component CSS outranks the global theme) must drop it when a theme is applied.
- **Type:** `--font-heading` / `--font-body` are an Optima system stack — no web fonts.
- **Buttons:** pill-shaped (`border-radius: 999px`). Variants: `.btn-primary` (solid navy), `.btn-outline` (navy outline on light), `.btn-outline-light` (white outline on dark bands). Calls to action use an outline button with an `aria-hidden` → arrow.
- **Illustrations** are abstract decorative art, so their placeholder `<img>` takes `alt=""`, with an HTML comment describing the intended artwork. Photos and meaningful images still follow the shared rule (description in `alt`).

## Project-specific notes

- Client details (name, domain, email, phone, address) and the Web3Forms key live in `src/app/site.ts` — read them from there, never hard-code them in templates.
- Page prefixes: `.lnd-` homepage, `.abt-` about, `.hch-` how I can help, `.cpl-` couples therapy, `.fees-` fees and practicalities, `.faq-` FAQs, `.con-` contact, `.nf-` 404, `.privacy` privacy notice.
- Inner pages share the global page layout in `src/styles.css` — `.page-hero` (title band + decorative art; add `.page-hero-art-large` to the art for a bigger, more prominent illustration), `.page-section` / `.page-section-alt`, `.page-split` (text beside a `.page-aside` column of `.page-box` panels, each given a `.section-*` theme), the `.section-*` colour themes, `.prose` and `.dot-list`. Use these before adding page CSS.
- Header and footer nav both render `navLinks` in `app.ts`.
- Unlike the shared default, the app shell does **not** render the enquiry form: `<app-enquiry />` lives on the Contact page only (also served at `/enquiry-received`). "Get in touch" calls to action link to `/contact`.
- Draft copy awaiting the client is marked `TODO(client)`; unknown fees and policies show "To be confirmed" rather than invented figures.
- New pages also need an entry in `SEO_BY_PATH` (`src/app/app.ts`), or they prerender with no canonical.
- Dev server runs on port 4401 (`npm start`).
