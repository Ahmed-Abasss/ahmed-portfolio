import { Component } from '@angular/core';
import { CONTACT } from '../../data/contact.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly contact = CONTACT;
}
