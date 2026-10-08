import { educationData } from "@/data/educationData";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function EducationSummary() {
  return (
    <section aria-label="Education Summary" className="py-14 sm:py-18 border-b border-[var(--border-subtle)]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <SectionHeader
          tag="Education"
          title="Education & Credentials"
          description="Formal computer science and secondary education records verified with institution names, timeframes, and academic standings."
          className="mb-0"
        />
        <Button
          href="/education"
          variant="outline"
          size="sm"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
          className="self-start sm:self-auto shrink-0"
        >
          View Academic Records
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu) => (
          <div
            key={edu.institution}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 flex flex-col justify-between hover:border-[var(--border-medium)] transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                <span className="text-[var(--accent)] font-medium">
                  {edu.period}
                </span>
                <span className="text-[var(--text-muted)]">{edu.location}</span>
              </div>

              <h3 className="font-semibold text-base sm:text-lg text-[var(--text-primary)] mb-1">
                {edu.institution}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] mb-4">
                {edu.degree}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {edu.metricLabel}
              </span>
              <span className="text-sm font-mono font-semibold text-[var(--accent)] px-2.5 py-0.5 rounded bg-[var(--accent-subtle)] border border-[var(--accent-border)]">
                {edu.metricValue}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
