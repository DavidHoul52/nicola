import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Couples therapy page, served at `/couples-therapy`.
 *
 * TODO(client): draft copy — Nicola to confirm the reasons list and how her
 * couples sessions are arranged.
 */
@Component({
  selector: 'app-couples-therapy',
  imports: [RouterLink],
  templateUrl: './couples-therapy.html',
  styleUrl: './couples-therapy.css',
})
export class CouplesTherapy {
  /** "Why couples come to therapy" list. */
  protected readonly reasons = [
    'Communication has broken down, or the same arguments keep repeating',
    'Feeling distant, unheard or taken for granted',
    'Rebuilding trust after an affair or a breach of trust',
    'Adjusting to change — a new baby, illness, a move, children leaving home or retirement',
    'Difficulties with intimacy or sex',
    'Wanting clarity about the future of the relationship',
  ];
}
