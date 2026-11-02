# CLAUDE.md — nicola

Shared conventions for all client websites live in the parent file and apply here:

@../CLAUDE.md

## Project-specific notes

- Client details (name, domain, email, phone, address) and the Web3Forms key live in `src/app/site.ts` — read them from there, never hard-code them in templates.
- Page prefixes: `.lnd-` homepage, `.nf-` 404, `.privacy` privacy notice.
- New pages also need an entry in `SEO_BY_PATH` (`src/app/app.ts`), or they prerender with no canonical.
- Dev server runs on port 4400, the same as davidhoulistoncounselling, so only run one at a time.
