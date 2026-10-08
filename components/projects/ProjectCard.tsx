import Link from "next/link";
import { ProjectData } from "@/data/projectsData";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <article className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8 hover:border-[var(--border-medium)] transition-all flex flex-col justify-between">
      <div>
        {/* Top metadata row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <Badge variant="accent">{project.badge}</Badge>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            {project.role}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)] mb-2">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-[var(--accent)] transition-colors"
          >
            {project.title}
          </Link>
        </h3>

        {/* Clarification Notice if present (e.g. for Pet Protocols) */}
        {project.notice && (
          <div className="mb-4 px-3 py-2 rounded-md bg-[var(--bg-subtle)] border-l-2 border-[var(--accent)] text-xs text-[var(--text-secondary)] leading-relaxed">
            {project.notice}
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Key Technologies */}
        <div className="mb-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
            Architecture & Stack
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 8).map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 8 && (
              <Badge variant="outline">
                +{project.technologies.length - 8} more
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Action links */}
      <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button
            href={project.githubUrl}
            variant="outline"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            icon={<GithubIcon className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            Repository
          </Button>

          {/* Render Live Demo ONLY if liveUrl is verified and provided */}
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="outline"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLink className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Live Demo
            </Button>
          )}
        </div>

        <Button
          href={`/projects/${project.slug}`}
          variant="primary"
          size="sm"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
          iconPosition="right"
        >
          Case Study
        </Button>
      </div>
    </article>
  );
}
