import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * About page, served at `/about`: Nicola's background, training and style.
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
  /** "Qualifications and experience" list, as supplied by Nicola. */
  protected readonly qualifications = [
    'Postgraduate Diploma in Psychological Interventions, University of Reading',
    'Couple Therapy for Depression, Tavistock Relationships',
    'Foundation Certificate in Humanistic Counselling Skills and Studies, Metanoia Institute',
    'Working with Long-Term Conditions and Medically Unexplained Symptoms, University of Exeter',
    'Advanced NHS training in Cognitive Therapy for Post-Traumatic Stress Disorder',
    'NHS training in adapting therapy for neurodiverse clients',
    'Supervision training for CBT Therapists, NHS/IAPT, University of Reading',
    'Considering Attachment Theory in CBT, Oxford Cognitive Therapy Centre',
    'Joined-up CBT for Survivors of Childhood Trauma, Oxford Cognitive Therapy Centre',
    'Mindfulness-Based Cognitive Therapy, Oxford Mindfulness Centre',
    'BSc (Hons) Speech and Language Therapy, University of Reading',
  ];
}
