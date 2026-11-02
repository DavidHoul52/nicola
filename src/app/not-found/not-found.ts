import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SITE } from '../site';

/**
 * Custom 404 page, rendered by the wildcard route so unknown URLs show a proper
 * "not found" screen (with full site chrome) instead of silently redirecting home.
 *
 * The host serves it from 404.html with a real 404 status (scripts/write-404.mjs).
 * The `noindex` tag is belt and braces for any path that reaches it with a 200,
 * and is removed on destroy so it doesn't leak to the next page. No canonical is
 * set — app.ts's applySeo() already strips it for paths absent from SEO_BY_PATH.
 */
@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound implements OnDestroy {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
  ) {
    this.title.setTitle(`Page not found | ${SITE.name}`);
    this.meta.addTag({ name: 'robots', content: 'noindex' });
  }

  ngOnDestroy(): void {
    this.meta.removeTag('name="robots"');
  }
}
