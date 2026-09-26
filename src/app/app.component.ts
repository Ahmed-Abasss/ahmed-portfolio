import { Component } from '@angular/core';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TimelineComponent } from './shared/timeline/timeline.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { FaqComponent } from './features/faq/faq.component';
import { ContactComponent } from './features/contact/contact.component';
import { EDUCATION, COURSES, EXPERIENCE } from './data/timeline.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    TimelineComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    FaqComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly education = EDUCATION;
  readonly courses = COURSES;
  readonly experience = EXPERIENCE;
}
