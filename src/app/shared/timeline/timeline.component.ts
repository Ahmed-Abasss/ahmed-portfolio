import { Component, Input } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { TimelineItem } from '../../data/timeline.data';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Input({ required: true }) sectionId!: string;
  @Input({ required: true }) title!: string;
  @Input() description?: string;
  @Input() alt = false;
  @Input({ required: true }) items!: TimelineItem[];
}
