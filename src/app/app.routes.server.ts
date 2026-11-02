import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * How each route is built. The site is deployed as static files (outputMode
 * "static" in angular.json): every route is rendered once at build time into
 * its own <path>/index.html, with its real title, description, canonical and
 * content.
 *
 * Every route is prerendered so that every real URL exists as a file. Render
 * resolves /faq to faq/index.html only when no catch-all rewrite is configured
 * (a rewrite overrides anything but an exact file match), so render.yaml has
 * none, and unknown URLs get a genuine 404.
 *
 * /articles is prerendered too, but only its shell: the Sanity fetch runs in
 * afterNextRender, which never runs at build time, so the list still comes
 * fresh from Sanity in the browser.
 */
export const serverRoutes: ServerRoute[] = [{ path: '**', renderMode: RenderMode.Prerender }];
