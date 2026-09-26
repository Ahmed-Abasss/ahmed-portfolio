export interface TimelineItem {
  title: string;
  org: string;
  date: string;
  points?: string[];
}

export const EDUCATION: TimelineItem[] = [
  {
    title: 'Computer Science Department',
    org: 'Faculty of Science, Ain Shams University',
    date: 'Graduated 2024',
  },
];

export const COURSES: TimelineItem[] = [
  {
    title: 'Back-End Development Diploma',
    org: 'Route Software Training Center',
    date: '04/2025 – 11/2025',
    points: [
      'Database Fundamentals, C# Basics, OOP, Advanced C#',
      'LINQ, Entity Framework Core',
      'ASP.NET MVC, ASP.NET Web API',
    ],
  },
  {
    title: 'Front-End Development Diploma',
    org: 'Route Software Training Center',
    date: '09/2023 – 03/2024',
    points: ['HTML, CSS, Bootstrap', 'JavaScript', 'Angular 16'],
  },
  {
    title: 'IT Essentials',
    org: 'Cisco Networking Academy',
    date: '09/2016 – 12/2016',
    points: [
      'Installing, building, repairing, and upgrading PCs',
      'Configuring computers for network communication',
      'Hardware and software troubleshooting',
    ],
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    title: 'Data Labeler',
    org: 'Micro Engineering',
    date: 'September 2024 – Present',
    points: [
      'Works on an autonomous-vehicle data project, monitoring and reviewing vehicle operation data.',
    ],
  },
];
