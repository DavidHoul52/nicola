import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Enquiry } from '../enquiry/enquiry';
import { SITE } from '../site';

/**
 * Contact page, served at `/contact` (and at `/enquiry-received` after a
 * successful submission): contact details, what happens after an enquiry, the
 * enquiry form — which appears on this page only — and where to get urgent help.
 */
@Component({
  selector: 'app-contact',
  imports: [RouterLink, Enquiry],
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
