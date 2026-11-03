import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * About page, served at `/about`: Nicola's background, training and style.
 *
 * TODO(client): draft copy built from the homepage text — Nicola to review and
 * extend (e.g. full qualifications and any memberships beyond BABCP).
 */
@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  /** "Background and training" list. */
  protected readonly background = [
    'BABCP-accredited psychological therapist',
    'Couples therapy training at Tavistock Relate',
    '23 years working in the NHS',
    'Previously a neurological specialist speech and language therapist',
  ];
}
