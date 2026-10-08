export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  technologies: string[];
  responsibilities: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Cognify Digital Pvt. Ltd.",
    role: "Web Development Intern",
    period: "May 2026 – June 2026",
    location: "New Delhi, India",
    type: "Internship",
    summary:
      "Contributed to front-end engineering and web interface implementation, focusing on building reusable components, integrating REST APIs, and resolving responsive UI defects.",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "REST APIs",
      "Git",
    ],
    responsibilities: [
      "Developed responsive and accessible web user interfaces using React.js and Next.js.",
      "Styled layouts and UI components with Tailwind CSS following provided design guidelines.",
      "Integrated backend REST API endpoints and handled asynchronous data states in React components.",
      "Engineered modular, reusable UI components to improve code maintainability across views.",
      "Investigated, reproduced, and resolved functional bugs and cross-browser rendering inconsistencies.",
      "Collaborated on code reviews, debugging sessions, and front-end optimization tasks.",
    ],
  },
];
