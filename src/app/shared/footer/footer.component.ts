import { Component } from '@angular/core';
import { CONTACT } from '../../data/contact.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly contact = CONTACT;
  readonly year = new Date().getFullYear();
}
