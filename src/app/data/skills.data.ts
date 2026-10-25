export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
   {
    category: 'Testing',
    items: ['Manual Testing', 'Api Testing'],
  },
  {
    category: 'Backend',
    items: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'ASP.NET Web API', 'Entity Framework Core', 'LINQ'],
  },
  {
    category: 'Database',
    items: ['SQL Server'],
  },
  {
    category: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    category: 'Tools',
    items: ['Git'],
  },
];
