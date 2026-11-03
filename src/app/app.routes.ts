import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Privacy } from './privacy/privacy';
import { About } from './about/about';
import { HowICanHelp } from './how-i-can-help/how-i-can-help';
import { CouplesTherapy } from './couples-therapy/couples-therapy';
import { Fees } from './fees/fees';
import { Faqs } from './faqs/faqs';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'about', component: About },
  { path: 'how-i-can-help', component: HowICanHelp },
  { path: 'couples-therapy', component: CouplesTherapy },
  { path: 'fees', component: Fees },
  { path: 'faqs', component: Faqs },
  { path: 'contact', component: Contact },
  { path: 'privacy', component: Privacy },
  // Post-enquiry confirmation URL used for conversion tracking (e.g. Google Ads).
  // Renders the homepage (with its enquiry form) so a direct visit returns 200
  // and shows the form, rather than falling through to the 404 below.
  { path: 'enquiry-received', component: Landing },
  // Unknown URLs render the custom 404 (keeping the typed URL) rather than
  // silently redirecting to the homepage.
  { path: '**', component: NotFound },
];
