export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    detail?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming and scripting languages used for systems, algorithms, and application logic.",
    skills: [
      { name: "C", detail: "Procedural programming & memory fundamentals" },
      { name: "C++", detail: "OOP, standard library, and algorithmic problem solving" },
      { name: "Java", detail: "Object-oriented software development & data structures" },
      { name: "Python", detail: "Scripting, backend logic, and automated workflows" },
      { name: "JavaScript", detail: "Modern ES6+, asynchronous programming, and DOM APIs" },
    ],
  },
  {
    category: "Frontend",
    description: "Technologies for building responsive, accessible, and high-performance client applications.",
    skills: [
      { name: "React", detail: "Component architecture, hooks, and client state orchestration" },
      { name: "Next.js", detail: "App Router, SSR, Server Components, and client optimization" },
      { name: "Tailwind CSS", detail: "Utility-first responsive design, layout tokens, and clean themes" },
      { name: "HTML", detail: "Semantic page structure, SEO practices, and web accessibility" },
      { name: "CSS", detail: "Modern layouts, Flexbox, Grid, transitions, and CSS variables" },
    ],
  },
  {
    category: "Backend",
    description: "Server runtimes, web frameworks, and communication protocols for robust web services.",
    skills: [
      { name: "Node.js", detail: "Event-driven runtime for scalable network services" },
      { name: "Express.js", detail: "REST API routing, middleware design, and error handling" },
      { name: "Django", detail: "Python web framework & REST framework fundamentals" },
      { name: "REST APIs", detail: "Resource modeling, HTTP semantics, and structured JSON responses" },
    ],
  },
  {
    category: "Databases",
    description: "Relational and document database systems for structured storage, integrity, and querying.",
    skills: [
      { name: "PostgreSQL", detail: "Relational schema design, ACID transactions, and query optimization" },
      { name: "MongoDB", detail: "Document store modeling, aggregation pipelines, and indexing" },
      { name: "Mongoose", detail: "Schema modeling, data validation hooks, and population queries" },
    ],
  },
  {
    category: "Authentication & Payments",
    description: "Secure session management, cryptographic verification, and transactional gateway integration.",
    skills: [
      { name: "NextAuth", detail: "OAuth strategies, JWT sessions, and protected route handlers" },
      { name: "JWT", detail: "Stateless token-based authentication and role claims" },
      { name: "Razorpay", detail: "Payment gateway integration, order creation, and webhook signature verification" },
    ],
  },
  {
    category: "Tools & Platforms",
    description: "Development environments, version control, continuous deployment, and daily workflows.",
    skills: [
      { name: "Git", detail: "Version control, branching workflows, and commit history management" },
      { name: "GitHub", detail: "Repository hosting, pull requests, issue tracking, and actions" },
      { name: "Vercel", detail: "Production hosting, edge deployments, and environment configuration" },
      { name: "VS Code", detail: "Primary IDE with language servers, debugging, and linting tools" },
    ],
  },
];
