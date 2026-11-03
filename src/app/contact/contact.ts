import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../site';

/**
 * Contact page, served at `/contact`: contact details, what happens after an
 * enquiry, and where to get urgent help.
 *
 * The enquiry form itself is not repeated here — the app shell renders it
 * directly below every page, so it follows this content.
 */
@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly site = SITE;

  /** "What happens next" — in order, rendered as a numbered list. */
  protected readonly nextSteps = [
    'Send me a message using the enquiry form or by email.',
    'I’ll get back to you to arrange an initial conversation.',
    'We talk about what’s bringing you to therapy and whether working together feels right.',
  ];
}
