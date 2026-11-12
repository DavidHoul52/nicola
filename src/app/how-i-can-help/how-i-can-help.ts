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
   
    'Neurodivergence, with therapy adapted to how you think and process information',
    'Relationship difficulties',
  ];

  /** "How therapy works" — in order, rendered as a numbered list. */
  protected readonly steps: Step[] = [
    {
      title: 'Getting in touch',
      text: 'Send me a short enquiry. I’ll get back to you to arrange an initial conversation, so we can think together about whether working with me is right for you. Both individual and couples CBT are time-limited therapies, typically lasting a maximum of 20 weeks.',
    },
    {
      title: 'Assessment',
      text: 'In our first sessions we look at what’s bringing you to therapy, how it affects your life, and what you would like to be different.',
    },
    {
      title: 'Working together',
      text: 'We explore how you make sense of experiences, the thoughts and beliefs that shape your responses, and practise new ways of thinking and responding. The aim is for you to become your own therapist by developing the knowledge, skills and confidence to use CBT strategies independently in everyday life. This can make therapy more affordable while also promoting greater autonomy and empowerment.',
    },
    {
      title: 'Consolidation',
      text: 'Over time, you develop the confidence to draw on your growing self-understanding and new skills in everyday life. By working in a focused, time-limited and cost-effective way, therapy aims to equip you with the tools and confidence to move forward independently, supporting a greater sense of autonomy and empowerment.',
    },
  ];
}
