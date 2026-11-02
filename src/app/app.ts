import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Enquiry } from './enquiry/enquiry';
import { gtagPageView } from './analytics';
import { SITE } from './site';

interface SeoEntry {
  canonical: string;
  title: string;
  description: string;
}

const HOME_SEO: SeoEntry = {
  canonical: `${SITE.origin}/`,
  title: `${SITE.name} | Counselling`,
  description: `Counselling with ${SITE.name}.`,
};

/** Per-route SEO metadata (title, description, canonical). Add an entry for every new page. */
const SEO_BY_PATH: Record<string, SeoEntry> = {
  '/': HOME_SEO,
  '/enquiry-received': HOME_SEO,
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
  /** Optional in-page anchor scrolled to after navigation. */
  fragment?: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Enquiry],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly site = SITE;
  protected readonly year = new Date().getFullYear();

  /** Mobile navigation toggle */
  protected readonly menuOpen = signal(false);

  /** Header, enquiry form, and footer are hidden on standalone pages (e.g. /privacy). */
  protected readonly showChrome = signal(true);

  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor(router: Router) {
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

  protected readonly navLinks: NavLink[] = [{ label: 'Home', link: '/' }];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
