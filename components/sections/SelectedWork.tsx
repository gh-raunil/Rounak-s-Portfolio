import { projectsData } from "@/data/projectsData";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function SelectedWork() {
  const projectList = Object.values(projectsData);

  return (
    <section aria-label="Selected Projects" className="py-14 sm:py-18 border-b border-[var(--border-subtle)]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <SectionHeader
          tag="Featured Projects"
          title="Featured Production Architectures"
          description="Detailed breakdowns of full-stack systems focusing on multi-tenant isolation, transactional integrity, and interface design."
          className="mb-0"
        />
        <Button
          href="/projects"
          variant="outline"
          size="sm"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
          className="self-start sm:self-auto shrink-0"
        >
          View All Projects
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projectList.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
