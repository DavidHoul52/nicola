import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../site';

/** Standalone privacy notice — app.ts hides the site chrome on this route. */
@Component({
  selector: 'app-privacy',
  imports: [RouterLink],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {
  protected readonly site = SITE;
}
