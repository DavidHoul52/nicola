import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Homepage, served at `/`, laid out from the client's mockup: hero, About me,
 * My approach, Therapy with me / My style, and a closing call to action.
 *
 * Static content only — the enquiry form and footer are rendered globally by
 * the app shell, so this component holds just its own <main> sections. The
 * calls to action scroll to that form via the `enquiry` fragment.
 *
 * The illustrations are placeholders until the artwork is supplied. They are
 * decorative (abstract circles), so their alt text is deliberately empty.
 */
@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  /** "Therapy with me" list. */
  protected readonly therapyPoints = [
    'Individual and couples CBT',
    'Time-limited therapy (typically up to 20 weeks)',
    'A focus on building your own skills and confidence',
    'Options for a consolidation period, and the chance to return if needed',
  ];
}
