export interface Project {
  id: string;
  name: string;
  summary: string;
  /** Architecture layers as they actually appear in the repo — verified from the solution structure. */
  layers: string[];
  /**
   * TODO(Ahmed): these are placeholders based on your general stack, not confirmed per-project.
   * Swap in whatever this specific project actually uses before publishing.
   */
  techTags: string[];
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'e-commerce',
    name: 'E-Commerce Platform',
    summary:
      'An ASP.NET Core e-commerce solution built around a clean, layered architecture that separates domain logic, data access, services, and presentation into distinct projects.',
    layers: ['Domain', 'Persistence', 'Services Abstraction', 'Services', 'Presentation', 'Web'],
    techTags: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server'],
    githubUrl: 'https://github.com/Ahmed-Abasss/E-Commerce',
  },
  {
    id: 'gym-management',
    name: 'Gym Management System',
    summary:
      'An ASP.NET MVC application for managing gym operations, structured as a three-tier solution that separates business logic, data access, and the presentation layer.',
    layers: ['Business Logic Layer (BLL)', 'Data Access Layer (DAL)', 'Presentation Layer (PL)'],
    techTags: ['C#', 'ASP.NET MVC', 'Entity Framework Core', 'SQL Server'],
    githubUrl: 'https://github.com/Ahmed-Abasss/C44-G02-MVC03',
  },
];
