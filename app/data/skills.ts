export interface Skill {
  name: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Supabase" },
    ],
  },
  {
    name: "Tools & Infrastructure",
    skills: [
      { name: "AWS" },
      { name: "Vercel" },
      { name: "Linux" },
      { name: "Git" },
    ],
  },
];

// Featured skills for the landing page preview
export const featuredSkills: Skill[] = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "PostgreSQL" },
  { name: "AWS" },
];
