export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What technologies does Ahmed specialize in?',
    answer:
      'Primarily the .NET ecosystem — C#, ASP.NET Core, ASP.NET MVC, ASP.NET Web API, and Entity Framework Core with SQL Server — paired with Angular and TypeScript on the front end.',
  },
  {
    question: 'Is Ahmed open to full-time opportunities?',
    answer: 'Yes — Ahmed is actively open to full-time roles as a junior .NET or full stack developer.',
  },
  {
    question: 'Is Ahmed available for freelance work?',
    answer: 'Yes, freelance and contract projects are welcome alongside full-time opportunities.',
  },
  {
    question: 'Where is Ahmed based?',
    answer: 'Giza, Egypt (6th of October City) — open to remote work and relocation discussions.',
  },
  {
    question: 'Where can his projects be viewed?',
    answer: 'All projects are on GitHub, linked in the Projects section and the footer below.',
  },
];
