import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Step {
  title: string;
  text: string;
}

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

  /** "How therapy works" — in order, rendered as a numbered list. Copy from Nicola. */
  protected readonly steps: Step[] = [
    {
      title: 'Getting in touch',
      text: 'Send me a short enquiry. I’ll get back to you to arrange an initial conversation, so we can think together about whether working with me is right for you. Both individual and couples CBT are time-limited therapies, typically lasting a maximum of 20 weeks.',
    },
    {
      title: 'Assessment',
      text: 'Assessment takes place over four sessions. We first meet together to explore what has brought you to therapy, followed by individual sessions to hear each of your perspectives. In the fourth session, I share a written and visual summary of the patterns and dynamics within your relationship, which helps guide our work together.',
    },
    {
      title: 'Working together',
      text: 'We further explore the patterns that create disconnection, helping you understand what lies beneath your reactions, communicate more openly and build a stronger emotional connection.',
    },
    {
      title: 'Consolidation',
      text: 'We build on the progress made in therapy, helping you develop the understanding and skills to continue working through challenges and nurturing your relationship together beyond therapy.',
    },
  ];
}
