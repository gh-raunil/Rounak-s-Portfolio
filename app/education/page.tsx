import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { educationData } from "@/data/educationData";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Formal academic records, degree coursework at VIT Vellore, and senior secondary credentials for Rounak Kumar.",
};

export default function EducationPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        tag="Academic Credentials"
        title="Academic Background"
        description="Formal computer science coursework and secondary education qualifications with verified grading criteria and institutions."
      />

      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <div
            key={edu.institution}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8 space-y-6"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-1.5">
                  {edu.institution}
                </h2>
                <div className="text-sm font-mono text-[var(--text-secondary)]">
                  {edu.degree}
                </div>
              </div>

              <div className="font-mono text-xs text-[var(--text-muted)] space-y-1 sm:text-right">
                <div className="text-[var(--text-primary)] font-medium">{edu.period}</div>
                <div>{edu.location}</div>
              </div>
            </div>

            {/* Performance Metric Badge */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {edu.metricLabel}:
              </span>
              <span className="font-mono font-semibold text-sm sm:text-base text-[var(--accent)] px-3 py-1 rounded bg-[var(--accent-subtle)] border border-[var(--accent-border)]">
                {edu.metricValue}
              </span>
            </div>

            {/* Curriculum and Details */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Academic Scope & Highlights
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {edu.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5">
                    <span className="text-[var(--accent)] font-mono select-none mt-0.5">↳</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Relevant Coursework Matrix */}
      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-6 sm:p-8 space-y-4">
        <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider font-medium">
          Core Undergraduate Subject Areas
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          Coursework at VIT Vellore includes Data Structures & Algorithms, Object-Oriented Programming (C++, Java), Database Management Systems (SQL & Relational Design), Computer Networks, Operating Systems, Web Technologies, and Software Engineering Principles.
        </p>
      </div>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
        <Button
          href="/resume"
          variant="primary"
          size="sm"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          View & Download Resume
        </Button>

        <Button
          href={siteConfig.resumePdfUrl}
          download="Rounak_Kumar_Resume.pdf"
          variant="outline"
          size="sm"
          icon={<Download className="w-3.5 h-3.5" />}
        >
          Download PDF Document
        </Button>
      </div>
    </div>
  );
}
