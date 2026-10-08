import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { experienceData } from "@/data/experienceData";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional software engineering experience, internship track, and development responsibilities of Rounak Kumar.",
};

export default function ExperiencePage() {
  const item = experienceData[0];

  return (
    <div className="space-y-10">
      <SectionHeader
        tag="Work Experience"
        title="Professional Experience"
        description="Hands-on software development history focused on web interfaces, component architecture, and API integration in commercial environments."
      />

      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8 space-y-6">
        {/* Company & Role Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-1.5">
              {item.company}
            </h2>
            <div className="text-sm font-mono text-[var(--text-secondary)]">
              {item.role} • <span className="text-[var(--accent)]">{item.type}</span>
            </div>
          </div>

          <div className="font-mono text-xs text-[var(--text-muted)] space-y-1 md:text-right">
            <div className="text-[var(--text-primary)] font-medium">{item.period}</div>
            <div>{item.location}</div>
          </div>
        </div>

        {/* Narrative Summary */}
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          {item.summary}
        </p>

        {/* Detailed Responsibilities */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
            Core Engineering Responsibilities
          </h3>
          <div className="space-y-3">
            {item.responsibilities.map((resp, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--accent)] font-mono select-none mt-0.5">
                  ↳
                </span>
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Applied */}
        <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[var(--text-muted)] mr-2">
            Applied Stack:
          </span>
          {item.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Engineering Philosophy in Teams */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-semibold text-base text-[var(--text-primary)] mb-2">
            Component Modularity & Design Consistency
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Prioritizing strict component reuse over ad-hoc styling. Standardizing form controls, navigation patterns, and state containers reduces UI regressions and accelerates cross-team iteration.
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold text-base text-[var(--text-primary)] mb-2">
            Defect Investigation & Debugging
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Systematically isolating issues across browser environments and API response states. Ensuring that network latencies, empty data responses, and edge cases are handled gracefully in the interface.
          </p>
        </Card>
      </section>

      {/* Action Footer */}
      <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
        <Button
          href="/skills"
          variant="outline"
          size="sm"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          Explore Technical Skills
        </Button>

        <Button
          href={siteConfig.resumePdfUrl}
          download="Rounak_Kumar_Resume.pdf"
          variant="secondary"
          size="sm"
          icon={<Download className="w-3.5 h-3.5" />}
        >
          Download Resume (PDF)
        </Button>
      </div>
    </div>
  );
}
