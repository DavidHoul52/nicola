import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Professional background page, served at `/experience`: Nicola's experience,
 * BABCP accreditation, and training and qualifications.
 *
 * TODO(client): draft copy built from the homepage text — Nicola to review and
 * extend (e.g. full qualifications and any memberships beyond BABCP).
 */
@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  /**
   * "Qualifications and experience" list, as supplied by Nicola. An entry with
   * a `url` links to where the credential can be verified.
   */
  protected readonly qualifications: Qualification[] = [
    { text: 'Postgraduate Diploma in Psychological Interventions, University of Reading' },
    {
      text: 'Couple Therapy for Depression, Tavistock Relationships',
    },
    {
      text: 'Exploring Intimacy: Learn to talk confidently with clients about sex, Basingstoke Counselling Service',
    },
    {
      text: 'Working with Long-Term Conditions and Medically Unexplained Symptoms, University of Exeter',
    },
    { text: 'Advanced NHS training in Cognitive Therapy for Post-Traumatic Stress Disorder' },
    { text: 'NHS training in adapting therapy for neurodiverse clients' },
    { text: 'Supervision training for CBT Therapists in the NHS' },
    { text: 'Considering Attachment Theory in CBT, Oxford Cognitive Therapy Centre' },
    { text: 'Joined-up CBT for Survivors of Childhood Trauma, Oxford Cognitive Therapy Centre' },
    { text: 'Mindfulness-Based Cognitive Therapy, Oxford Mindfulness Centre' },
    { text: 'BSc (Hons) Speech and Language Therapy, University of Reading' },
  ];
}

interface Qualification {
  text: string;
  /** Optional external page for the credential (e.g. a register listing). */
  url?: string;
}
