import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Step {
  title: string;
  text: string;
}

/**
 * "How I can help" page, served at `/how-i-can-help`: what CBT is, the
 * difficulties Nicola works with, and how a course of therapy runs.
 *
 * TODO(client): the difficulties list is a draft — Nicola to confirm which she
 * wants to name.
 */
@Component({
  selector: 'app-how-i-can-help',
  imports: [RouterLink],
  templateUrl: './how-i-can-help.html',
  styleUrl: './how-i-can-help.css',
})
export class HowICanHelp {
  /** "Things people come to me with" list. */
  protected readonly difficulties = [
    'Anxiety and worry',
    'Low mood and depression',
    'Panic',
    'Health anxiety',
    'Low self-esteem and self-criticism',
    'Stress and burnout',
    'Adjusting to a health condition or diagnosis',
    'Relationship difficulties',
    'Life changes and transitions',
  ];

  /** "How therapy works" — in order, rendered as a numbered list. */
  protected readonly steps: Step[] = [
    {
      title: 'Getting in touch',
      text: 'Send me a short enquiry. I’ll get back to you to arrange an initial conversation, so we can think together about whether working with me is right for you.',
    },
    {
      title: 'Assessment',
      text: 'In our first sessions we look at what’s bringing you to therapy, how it affects your life, and what you would like to be different.',
    },
    {
      title: 'Working together',
      text: 'Therapy is time-limited — typically up to 20 weeks. We explore the patterns keeping difficulties going and practise new ways of responding, building your own skills and confidence.',
    },
    {
      title: 'Consolidation and returning',
      text: 'Towards the end there is the option of a consolidation period with less frequent sessions, and the chance to return in future if you need to.',
    },
  ];
}
