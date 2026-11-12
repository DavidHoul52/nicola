import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../site';

/** Standalone privacy notice — app.ts hides the site chrome on this route. */
@Component({
  selector: 'app-privacy',
  imports: [RouterLink],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {
  protected readonly site = SITE;
  /** Origin without the protocol, e.g. "example.com", for display. */
  protected readonly websiteLabel = SITE.origin.replace(/^https?:\/\//, '');
  /** Phone number with spaces and punctuation stripped, for the tel: link. */
  protected readonly phoneHref = SITE.phone.replace(/[^\d+]/g, '');
}
