import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Homepage, served at `/`. Static content only — the enquiry form and footer
 * are rendered globally by the app shell, so this component holds just its own
 * <main> sections. The "Get in touch" CTA scrolls to the global enquiry form via
 * the `enquiry` fragment.
 */
@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
