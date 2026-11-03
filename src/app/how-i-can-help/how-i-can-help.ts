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
 * The difficulties list follows Nicola's notes; the last two entries come from
 * her neurodiversity training and couples work rather than that list.
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
    'Low self-worth',
    'Depression',
    'Post-traumatic stress disorder (PTSD)',
    'Anxiety, including OCD, social anxiety, health anxiety, phobias, panic, generalised anxiety and body dysmorphia',
    'Family estrangement',
    'Neurodivergence, with therapy adapted to how you think and process information',
    'Relationship difficulties',
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
      text: 'We explore the patterns keeping difficulties going and practise new ways of responding.',
    },
    {
      title: 'Consolidation',
      text: 'Sessions become less frequent as you put your skills into practice on your own.',
    },
  ];
}
