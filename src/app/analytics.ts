/**
 * Thin, typed wrapper around the global gtag() defined by the GA4 snippet in
 * index.html. Everything is optional-chained so it safely no-ops when gtag is
 * absent — e.g. blocked by an ad blocker, or in a non-browser context.
 */

/** Signature of the global gtag() injected by index.html. */
type GtagFn = (...args: unknown[]) => void;

function gtag(): GtagFn | undefined {
  return (globalThis as typeof globalThis & { gtag?: GtagFn }).gtag;
}

/** Send a GA4 event. See https://developers.google.com/analytics/devguides/collection/ga4/events */
export function gtagEvent(name: string, params: Record<string, unknown> = {}): void {
  gtag()?.('event', name, params);
}

/**
 * Send a GA4 page_view for a client-side route change. Automatic page_view is
 * disabled in index.html (send_page_view: false), so the SPA owns every
 * page_view — including the initial load — and there is no double-counting.
 */
export function gtagPageView(path: string): void {
  const win = globalThis as typeof globalThis & { location?: Location; document?: Document };
  gtagEvent('page_view', {
    page_path: path,
    page_location: win.location?.href,
    page_title: win.document?.title,
  });
}
