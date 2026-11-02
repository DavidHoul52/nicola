/**
 * Client details used across the site — header, footer, enquiry form, privacy
 * notice and SEO. Everything client-specific lives here so it changes in one place.
 *
 * TODO: replace the placeholder values before launch. `origin` in particular is
 * written into every page's canonical link at build time.
 */
export const SITE = {
  /** Practitioner's name as shown in the header, footer and page titles. */
  name: 'Nicola',
  /** Credentials line shown under the name in the footer, e.g. 'MBACP'. Empty hides it. */
  credentials: '',
  /** Live site origin, no trailing slash. Used to build canonical links. */
  origin: 'https://example.com',
  email: 'hello@example.com',
  /** Display form of the phone number. Empty hides it. */
  phone: '',
  /** Postal address lines for the footer. Empty hides the address. */
  address: [] as string[],
} as const;

/**
 * Web3Forms access key. Get a free key by entering the client's email at
 * https://web3forms.com — submissions are emailed to that address. No backend
 * required, which is why this works on a static site.
 *
 * Empty until set: the enquiry form then refuses to submit and points visitors
 * at the email address instead of failing silently.
 */
export const WEB3FORMS_ACCESS_KEY = '';
