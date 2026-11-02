// Write dist/.../browser/404.html for the static host to serve, with a 404
// status, for URLs that don't match a prerendered page.
//
// It is a copy of index.csr.html: the empty client-rendered shell. Angular boots
// in the browser, the router matches the '**' wildcard, and the styled
// "page can't be found" component renders. (Copying a prerendered page instead
// would flash that page's content before the 404 view replaced it.)
import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const out = 'dist/nicola/browser';
const shell = join(out, 'index.csr.html');

if (!existsSync(shell)) {
  // Fail the build rather than deploy without a 404 page.
  console.error(`write-404: ${shell} not found — did the Angular build change its output?`);
  process.exit(1);
}

copyFileSync(shell, join(out, '404.html'));
console.log(`write-404: wrote ${join(out, '404.html')}`);
