import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { FAQ_ITEMS } from '../../data/faq.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  readonly items = FAQ_ITEMS;
}
