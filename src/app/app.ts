import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  IsActiveMatchOptions,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { gtagPageView } from './analytics';
import { SITE } from './site';

interface SeoEntry {
  canonical: string;
  title: string;
  description: string;
}

const HOME_SEO: SeoEntry = {
  canonical: `${SITE.origin}/`,
  title: `${SITE.name} | ${SITE.tagline} — Individual & Couples CBT`,
  description:
    'Individual and couples CBT therapy in a supportive, non-judgemental space, with a BABCP-accredited psychological therapist.',
};

const CONTACT_SEO: SeoEntry = {
  canonical: `${SITE.origin}/contact`,
  title: `Contact | ${SITE.name}`,
  description: `Get in touch with ${SITE.name} to find out whether individual or couples therapy could help.`,
};

/** Per-route SEO metadata (title, description, canonical). Add an entry for every new page. */
const SEO_BY_PATH: Record<string, SeoEntry> = {
  '/': HOME_SEO,
  '/about': {
    canonical: `${SITE.origin}/about`,
    title: `About | ${SITE.name}, ${SITE.tagline}`,
    description:
      'BABCP-accredited psychological therapist with 23 years in the NHS, trained in couples therapy at Tavistock Relationships.',
  },
  '/how-i-can-help': {
    canonical: `${SITE.origin}/how-i-can-help`,
    title: `How I Can Help | ${SITE.name}`,
    description:
      'CBT for anxiety, low mood, relationship and health-related difficulties — time-limited therapy focused on building your own skills.',
  },
  '/couples-therapy': {
    canonical: `${SITE.origin}/couples-therapy`,
    title: `Couples Therapy | ${SITE.name}`,
    description:
      'Couples therapy with a Tavistock Relationships-trained therapist: a space for both of you to be heard and find new ways of relating.',
  },
  '/fees': {
    canonical: `${SITE.origin}/fees`,
    title: `Fees and Practicalities | ${SITE.name}`,
    description: `Session fees, location, payment, cancellations and confidentiality for therapy with ${SITE.name}.`,
  },
  '/faqs': {
    canonical: `${SITE.origin}/faqs`,
    title: `FAQs | ${SITE.name}`,
    description:
      'Answers to common questions about CBT, couples therapy, session numbers, confidentiality and getting started.',
  },
  '/contact': CONTACT_SEO,
  // Confirmation URL shows the Contact page, so it shares its canonical.
  '/enquiry-received': CONTACT_SEO,
  '/privacy': {
    canonical: `${SITE.origin}/privacy`,
    title: `Privacy Notice | ${SITE.name}`,
    description: `How ${SITE.name} collects, uses, and protects your personal information.`,
  },
};

interface NavLink {
  label: string;
  /** Router path. */
  link: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly site = SITE;
  protected readonly year = new Date().getFullYear();

  /** Mobile navigation toggle */
  protected readonly menuOpen = signal(false);

  /** Header and footer are hidden on standalone pages (e.g. /privacy). */
  protected readonly showChrome = signal(true);

  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor(router: Router, viewportScroller: ViewportScroller) {
    // Fragment links (e.g. /about#approach) would otherwise land under the
    // sticky header: the router scrolls with window.scrollTo, which ignores CSS
    // scroll-margin, so offset by the header's live height (0 when it's hidden).
    viewportScroller.setOffset(() => [
      0,
      (this.document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 0) + 16,
    ]);

    router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const path = event.urlAfterRedirects.split(/[?#]/)[0];
        this.showChrome.set(!path.startsWith('/privacy'));
        this.applySeo(path);
        // Send after applySeo so the GA4 page_title reflects this route's <title>.
        gtagPageView(path);
      });
  }

  /** Set <title>, meta description, and <link rel="canonical"> for the current route. */
  private applySeo(path: string): void {
    const entry = SEO_BY_PATH[path];

    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!entry) {
      link?.remove();
      return;
    }

    this.title.setTitle(entry.title);
    this.meta.updateTag({ name: 'description', content: entry.description });

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', entry.canonical);
  }

  /** Header navigation, in display order. Each page also needs a route and an SEO_BY_PATH entry. */
  protected readonly navLinks: NavLink[] = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'How I can help', link: '/how-i-can-help' },
    { label: 'Couples therapy', link: '/couples-therapy' },
    { label: 'Fees and practicalities', link: '/fees' },
    { label: 'FAQs', link: '/faqs' },
    { label: 'Contact', link: '/contact' },
  ];

  /**
   * Exact paths so Home isn't underlined on every page. Fragments are ignored,
   * so Contact stays marked when its "enquiry form" link jumps to #enquiry.
   */
  protected readonly navActiveOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored',
  };

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
