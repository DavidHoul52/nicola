import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Step {
  title: string;
  text: string;
}

/**
 * "How I can help with CBT" page, served at `/cbt`: what CBT is, the
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
    'Post-natal depression',
    'Anxiety, including OCD, social anxiety, health anxiety, phobias, panic and generalised anxiety',
   
    'Neurodivergence, with therapy adapted to how you think and process information',
    'Relationship difficulties',
    'Estrangement',
    'Long-term conditions',
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
      text: 'Together, we explore how your thoughts, beliefs and experiences shape the way you feel and respond, while developing practical strategies to support positive change. The aim is to equip you with the skills and confidence to apply CBT in everyday life.',
    },
    {
      title: 'Consolidation',
      text: 'As therapy progresses, you build on your growing self-awareness and skills, developing the confidence to manage future challenges independently. Working in a focused, time-limited way, therapy aims to foster lasting change, autonomy and empowerment.',
    },
  ];
}
