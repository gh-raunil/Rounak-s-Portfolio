import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { skillsData } from "@/data/skillsData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills & Taxonomy",
  description:
    "Comprehensive technical taxonomy and toolsets utilized by Full-Stack Developer Rounak Kumar across languages, frameworks, and databases.",
};

export default function SkillsPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        tag="Technical Skills"
        title="Technical Taxonomy & Tooling"
        description="A structured index of languages, libraries, platforms, and database engines applied across production architectures and engineering projects. Presented without arbitrary percentages or progress bars."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 flex flex-col justify-between hover:border-[var(--border-medium)] transition-all"
          >
            <div>
              <h2 className="font-semibold text-lg text-[var(--text-primary)] mb-2">
                {category.category}
              </h2>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {category.description}
              </p>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 p-2.5 rounded-lg bg-[var(--bg-subtle)] text-xs"
                  >
                    <span className="font-semibold text-[var(--text-primary)] font-mono">
                      {skill.name}
                    </span>
                    {skill.detail && (
                      <span className="text-[var(--text-muted)] text-[11px] sm:text-right">
                        {skill.detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <Badge key={skill.name} variant="default" className="text-[11px]">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Applied Philosophy Note */}
      <Card className="border-l-4 border-l-[var(--accent)]">
        <h3 className="font-semibold text-base text-[var(--text-primary)] mb-1">
          Taxonomy Philosophy
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          Technologies are listed based on actual hands-on application in working codebases, academic projects at VIT Vellore, and industry internship tasks. No vanity percentage metrics or subjective grading scales are used.
        </p>
      </Card>

      {/* Footer Navigation */}
      <div className="pt-4 flex items-center justify-between">
        <Button
          href="/education"
          variant="outline"
          size="sm"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          View Education & Coursework
        </Button>
      </div>
    </div>
  );
}
