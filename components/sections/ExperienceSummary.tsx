import { experienceData } from "@/data/experienceData";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function ExperienceSummary() {
  const item = experienceData[0];

  return (
    <section aria-label="Professional Experience Summary" className="py-14 sm:py-18 border-b border-[var(--border-subtle)]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <SectionHeader
          tag="Work Experience"
          title="Professional Experience"
          description="Verified hands-on industry work developing production user interfaces, integrating APIs, and engineering reusable components."
          className="mb-0"
        />
        <Button
          href="/experience"
          variant="outline"
          size="sm"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
          className="self-start sm:self-auto shrink-0"
        >
          Detailed Work History
        </Button>
      </div>

      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-1">
              {item.company}
            </h3>
            <div className="text-sm font-mono text-[var(--text-secondary)]">
              {item.role} • <span className="text-[var(--accent)]">{item.type}</span>
            </div>
          </div>

          <div className="text-right md:text-right font-mono text-xs text-[var(--text-muted)] space-y-0.5">
            <div>{item.period}</div>
            <div>{item.location}</div>
          </div>
        </div>

        <p className="mt-6 text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
          {item.summary}
        </p>

        <div className="space-y-2 mb-6">
          {item.responsibilities.slice(0, 4).map((resp, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
              <span className="text-[var(--accent)] font-mono select-none">↳</span>
              <span>{resp}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-mono text-[var(--text-muted)] mr-2">Technologies:</span>
          {item.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
