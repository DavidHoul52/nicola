import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { gtagEvent, gtagPageView } from '../analytics';
import { SITE, WEB3FORMS_ACCESS_KEY } from '../site';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * hCaptcha spam protection. The access key ships in the JS bundle, so on its
 * own it doesn't stop a bot POSTing the endpoint directly — Web3Forms verifies
 * this token server-side with their own secret, which does.
 *
 * This is Web3Forms' shared sitekey for free plans; we don't register with
 * hCaptcha ourselves. It only works while "Block Spam: hCaptcha" is enabled for
 * the form in the Web3Forms dashboard — without that, submissions missing the
 * token are still accepted.
 */
const HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';
const HCAPTCHA_SCRIPT =
  'https://js.hcaptcha.com/1/api.js?render=explicit&recaptchacompat=off&onload=onHcaptchaLoad';

/** The slice of the hCaptcha JS API this component uses. */
interface HCaptcha {
  render(host: HTMLElement, options: { sitekey: string; theme?: 'light' | 'dark' }): string;
  getResponse(widgetId: string): string;
  reset(widgetId: string): void;
}

declare global {
  interface Window {
    hcaptcha?: HCaptcha;
    onHcaptchaLoad?: () => void;
  }
}

@Component({
  selector: 'app-enquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './enquiry.html',
  styleUrl: './enquiry.css',
})
export class Enquiry {
  protected readonly email = SITE.email;

  /** Submission states for the enquiry form */
  protected readonly enquirySent = signal(false);
  protected readonly enquiryError = signal(false);
  protected readonly enquirySubmitting = signal(false);

  /** Submitted without solving the captcha */
  protected readonly captchaError = signal(false);
  /** The hCaptcha script itself failed to load — offer the email fallback */
  protected readonly captchaFailed = signal(false);

  private readonly captchaHost = viewChild<ElementRef<HTMLElement>>('captchaHost');
  private captchaWidgetId: string | null = null;
  private captchaPending: Promise<void> | null = null;

  protected readonly enquiryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private location: Location,
  ) {
    this.enquiryForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  /**
   * Render the hCaptcha widget, loading its script on first use. Called when
   * someone first interacts with the form rather than on page load: the enquiry
   * form sits in the app shell, so eagerly loading a third-party script would
   * cost every page view on the site.
   */
  protected prepareCaptcha(): void {
    if (this.captchaPending) return;

    const host = this.captchaHost()?.nativeElement;
    if (!host) return;

    this.captchaPending = this.loadHcaptchaScript()
      .then(() => {
        this.captchaWidgetId = window.hcaptcha!.render(host, {
          sitekey: HCAPTCHA_SITEKEY,
          theme: 'light',
        });
      })
      .catch(() => {
        this.captchaFailed.set(true);
      });
  }

  private loadHcaptchaScript(): Promise<void> {
    if (window.hcaptcha) return Promise.resolve();

    return new Promise<void>((resolve, reject) => {
      // hCaptcha's api.js signals readiness through a global named in the URL,
      // not the script's own load event.
      window.onHcaptchaLoad = () => resolve();

      const script = document.createElement('script');
      script.src = HCAPTCHA_SCRIPT;
      script.async = true;
      script.defer = true;
      script.onerror = () => reject(new Error('hCaptcha failed to load'));
      document.head.appendChild(script);
    });
  }

  /** The current single-use captcha token, or '' if it hasn't been solved. */
  private captchaToken(): string {
    if (this.captchaWidgetId === null) return '';
    return window.hcaptcha?.getResponse(this.captchaWidgetId) ?? '';
  }

  protected submitEnquiry(): void {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      // Not configured yet (see site.ts). Show the error with the email
      // fallback rather than posting a request that can only be rejected.
      console.error('Enquiry form: WEB3FORMS_ACCESS_KEY is not set in src/app/site.ts');
      this.enquiryError.set(true);
      return;
    }

    const captchaToken = this.captchaToken();
    if (!captchaToken) {
      // Covers the widget never having rendered (e.g. the form was filled by
      // autofill without a focus event) as well as an unsolved captcha.
      this.prepareCaptcha();
      this.captchaError.set(true);
      return;
    }

    const { firstName, lastName, email, subject, message } = this.enquiryForm.value;

    this.captchaError.set(false);
    this.enquiryError.set(false);
    this.enquirySubmitting.set(true);

    this.http
      .post(WEB3FORMS_ENDPOINT, {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Enquiry: ${subject}`,
        name: `${firstName} ${lastName ?? ''}`.trim(),
        email,
        message,
        'h-captcha-response': captchaToken,
      })
      .subscribe({
        next: () => {
          this.enquirySubmitting.set(false);
          this.enquirySent.set(true);
          this.enquiryForm.reset();
          // GA4 recommended lead event — mark this as a Key Event in the GA4
          // UI to count it as a conversion.
          gtagEvent('generate_lead', { form_subject: subject });
          // Switch to a distinct URL so the successful submission can be
          // tracked as a conversion (e.g. Google Ads). Updated in place via
          // pushState — no route change — so the current page stays put and
          // the URL reverts on the next navigation.
          this.location.go('/enquiry-received');
          // pushState doesn't fire the router's NavigationEnd, so the app-level
          // page_view tracker won't see it — send the virtual page_view here.
          gtagPageView('/enquiry-received');
        },
        error: () => {
          this.enquirySubmitting.set(false);
          this.enquiryError.set(true);
          // Captcha tokens are single-use, so a retry needs a fresh one. Safe
          // here (unlike on success) because the form is still on screen.
          if (this.captchaWidgetId !== null) {
            window.hcaptcha?.reset(this.captchaWidgetId);
          }
        },
      });
  }
}
