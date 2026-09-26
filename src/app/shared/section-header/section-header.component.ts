import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="section-header">
      <h2 class="section-header__title">{{ title }}</h2>
      @if (description) {
        <p class="section-header__description">{{ description }}</p>
      }
    </div>
  `,
  styles: [
    `
      .section-header {
        margin-bottom: var(--space-5);
        max-width: var(--content-width);
      }
      .section-header__title {
        font-size: var(--fs-h2);
        font-weight: 600;
        letter-spacing: -0.01em;
      }
      .section-header__description {
        margin-top: var(--space-2);
        color: var(--text-muted);
        font-size: var(--fs-body);
      }
    `,
  ],
})
export class SectionHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() description?: string;
}
