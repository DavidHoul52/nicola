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
        'Cognitive behavioural therapy (CBT) is a practical, collaborative therapy that looks at how thoughts, feelings, body and behaviour affect one another. We explore the patterns keeping difficulties going now, understand where they came from, and try out new ways of responding. CBT is an evidence-based approach, meaning it has been extensively researched and shown to be effective in helping people manage a range of emotional and psychological difficulties. It is recommended by the National Institute for Health and Care Excellence (NICE) in the UK for a number of mental health conditions.',
      ],
      more: { label: 'How I can help using CBT', link: '/cbt' },
    },
    {
      question: 'How many sessions will I need?',
      answer: [
        'This depends on the difficulty you’re presenting with and will be discussed at the beginning of therapy with and progress is reviewed as we go.    CBT is time limited and is typically up to a maximum of 20 weeks initially, some difficulties can be worked with in fewer sessions. ',
       
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
      question: 'Where and when are sessions?',
      answer: ['Appointments are available on Saturdays and Sundays.','Therapy is primarily offered face-to-face at Wokingham Therapy Clinie, with online sessions available where appropriate and by arrangement. Face-to-face therapy offers a dedicated, private space away from everyday distractions, allowing for a more personal therapeutic connection. Being in the same room can also support greater awareness of non-verbal communication, helping to build rapport and create a safe, focused environment for therapeutic work'],
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
