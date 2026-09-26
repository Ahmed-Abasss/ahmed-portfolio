import { Component, HostListener, OnInit, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { ActiveSectionService } from '../../core/active-section.service';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  readonly links: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  constructor(
    readonly themeService: ThemeService,
    readonly activeSection: ActiveSectionService,
  ) {}

  ngOnInit(): void {
    this.activeSection.observe([
      'home',
      'about',
      'skills',
      'projects',
      'education',
      'courses',
      'experience',
      'faq',
      'contact',
    ]);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
