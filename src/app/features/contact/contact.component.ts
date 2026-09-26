import { Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { CONTACT } from '../../data/contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly contact = CONTACT;
  readonly copied = signal(false);

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.contact.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard API unavailable — the email is still selectable/visible as plain text.
    }
  }
}
