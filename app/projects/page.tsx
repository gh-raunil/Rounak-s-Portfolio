import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projectsData";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering case studies for production-oriented full-stack web applications and multi-tenant architectures built by Rounak Kumar.",
};

export default function ProjectsPage() {
  const projectList = Object.values(projectsData);

  return (
    <div className="space-y-10">
      <SectionHeader
        tag="Case Studies"
        title="Software Engineering Case Studies"
        description="Comprehensive technical breakdowns of two primary full-stack architectures. Each study covers problem domain, multi-tenant boundaries, transactional integrity, and core engineering decisions."
      />

      <div className="space-y-8">
        {projectList.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
