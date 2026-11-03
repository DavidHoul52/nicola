import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Fee {
  service: string;
  /** Session length, e.g. "50 minutes". */
  length: string;
  /** Display price, e.g. "£90". */
  price: string;
}

/** Shown wherever a client detail has not been supplied yet. */
const TBC = 'To be confirmed';

/**
 * Fees and practicalities page, served at `/fees`.
 *
 * TODO(client): every "To be confirmed" value below and in the template (fees,
 * session lengths, location, payment, cancellation notice, insurers) needs
 * Nicola's real details before launch.
 */
@Component({
  selector: 'app-fees',
  imports: [RouterLink],
  templateUrl: './fees.html',
  styleUrl: './fees.css',
})
export class Fees {
  protected readonly fees: Fee[] = [
    { service: 'Initial consultation', length: TBC, price: TBC },
    { service: 'Individual CBT session', length: TBC, price: TBC },
    { service: 'Couples therapy session', length: TBC, price: TBC },
  ];
}
