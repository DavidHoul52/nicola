import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Faq {
  question: string;
  /** One string per paragraph. */
  answer: string[];
  /** Optional link to the page with more detail. */
  more?: { label: string; link: string };
}

/**
 * FAQs page, served at `/faqs`. Each question is a native <details> disclosure,
 * so it opens with the keyboard and announces its state without any script.
 *
 * TODO(client): draft answers — Nicola to review, and to fill in the items that
 * point at "to be confirmed" details on the fees page.
 */
@Component({
  selector: 'app-faqs',
  imports: [RouterLink],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css',
})
export class Faqs {
  protected readonly faqs: Faq[] = [
    {
      question: 'What is CBT?',
      answer: [
        'Cognitive behavioural therapy (CBT) is a practical, collaborative therapy that looks at how thoughts, feelings, body and behaviour affect one another. We explore the patterns keeping difficulties going now, understand where they came from, and try out new ways of responding.',
      ],
      more: { label: 'How I can help', link: '/how-i-can-help' },
    },
    {
      question: 'How many sessions will I need?',
      answer: [
        'Therapy is time-limited — typically up to 20 weeks. We agree the length together after the first sessions, and review progress as we go.',
        'Towards the end there is the option of a consolidation period with less frequent sessions, and the chance to return in future if you need to.',
      ],
    },
    {
      question: 'What happens in the first session?',
      answer: [
        'The first session is a chance to talk about what has brought you to therapy, what you would like to be different, and any questions you have about how I work. There is no pressure to share more than you feel ready to.',
      ],
    },
    {
      question: 'How much does therapy cost, and how long are sessions?',
      answer: ['Fees and session lengths are listed on the fees and practicalities page.'],
      more: { label: 'Fees and practicalities', link: '/fees' },
    },
    {
      question: 'Do you offer online sessions?',
      answer: ['Where sessions take place is covered on the fees and practicalities page.'],
      more: { label: 'Fees and practicalities', link: '/fees' },
    },
    {
      question: 'Do I need a referral from my GP?',
      answer: [
        'No — you can contact me directly. If you plan to claim through health insurance, check with your insurer first, as some ask for a GP referral.',
      ],
    },
    {
      question: 'Is what I say confidential?',
      answer: [
        'Yes. What you share in therapy stays confidential. The rare exceptions — such as a serious risk to you or someone else — are explained in our first session.',
      ],
    },
    {
      question: 'My partner doesn’t want to come. Can I still have therapy?',
      answer: [
        'Yes. Many relationship difficulties can be worked on in individual therapy, and some people start on their own before deciding whether to try couples work.',
      ],
      more: { label: 'Couples therapy', link: '/couples-therapy' },
    },
    {
      question: 'What if I need help urgently?',
      answer: [
        'I’m not able to offer an emergency service. If you are in crisis or your life is at risk, call 999 or go to A&E. For urgent help that isn’t an emergency, call NHS 111. Samaritans are available day and night, free, on 116 123.',
      ],
    },
  ];
}
