import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineering profile, architectural philosophy, academic background, and professional focus of Rounak Kumar.",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Frontend Engineering",
      content:
        "Building responsive, accessible web applications using Next.js, React, and Tailwind CSS. Emphasizing clean component modularity, client-side state minimization, and fast Largest Contentful Paint (LCP) performance.",
    },
    {
      title: "Backend & Systems Design",
      content:
        "Developing structured REST APIs with Express.js, TypeScript, and Node.js. Enforcing robust input parsing via Zod, stateless JWT session boundaries, and strict multi-tenant authorization middleware.",
    },
    {
      title: "Database Modeling & Integrity",
      content:
        "Designing relational schemas in PostgreSQL and flexible document stores in MongoDB. Applying transactional execution blocks to guarantee financial consistency and eliminate orphaned records.",
    },
  ];

  return (
    <div className="space-y-12">
      <SectionHeader
        tag="About"
        title="Background & Engineering Focus"
        description="A Full-Stack Developer building modern web applications, responsive interfaces, APIs, databases, and complete software systems."
      />

      {/* Main Narrative */}
      <section className="space-y-6 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
        <p>
          I am a Full-Stack Developer specializing in software architecture, web systems, and modern full-stack development. Currently pursuing my Bachelor of Computer Applications (BCA) at Vellore Institute of Technology (VIT Vellore) with a current CGPA of 9.09, my work centers on bridging elegant client interfaces with resilient backend engines and transactional data layers.
        </p>
        <p>
          During my internship at Cognify Digital Pvt. Ltd. in New Delhi, I contributed to production web applications utilizing React.js, Next.js, and Tailwind CSS. My focus included building reusable component libraries, implementing responsive designs, resolving functional UI bugs, and integrating backend REST services into smooth user workflows.
        </p>
        <p>
          When architecting personal projects, I gravitate toward complex domain challenges: building multi-tenant food ordering platforms with real-time cart state and payment gateways, or multi-branch coaching management systems where revenue analytics must reflect true settled ledger transactions rather than superficial invoices.
        </p>
      </section>

      {/* Core Engineering Pillars */}
      <section>
        <h3 className="font-semibold text-lg sm:text-xl text-[var(--text-primary)] mb-6">
          Architectural Focus Areas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title} hover className="flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-[var(--text-primary)] mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {pillar.content}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Verified Timeline Snapshot */}
      <section className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-6 sm:p-8 space-y-6">
        <div className="border-b border-[var(--border-subtle)] pb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block">
            Milestones
          </span>
          <h4 className="font-semibold text-base text-[var(--text-primary)]">
            Verified Academic & Industry Track
          </h4>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-4 border-b border-[var(--border-subtle)]/60 text-xs sm:text-sm">
            <div>
              <span className="font-semibold text-[var(--text-primary)]">
                Cognify Digital Pvt. Ltd. — Web Development Intern
              </span>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                React.js, Next.js, Tailwind CSS, REST API integration, debugging & reusable components
              </p>
            </div>
            <span className="font-mono text-xs text-[var(--accent)] shrink-0">
              May 2026 – June 2026
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-4 border-b border-[var(--border-subtle)]/60 text-xs sm:text-sm">
            <div>
              <span className="font-semibold text-[var(--text-primary)]">
                VIT Vellore — Bachelor of Computer Applications (BCA)
              </span>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Data structures, algorithms, databases, web systems — Current CGPA: 9.09
              </p>
            </div>
            <span className="font-mono text-xs text-[var(--accent)] shrink-0">
              2024 – 2027
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
            <div>
              <span className="font-semibold text-[var(--text-primary)]">
                CH+2 High School JMT, Jharkhand — Class XII
              </span>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Science & Mathematics foundation — Aggregate: 81.20%
              </p>
            </div>
            <span className="font-mono text-xs text-[var(--accent)] shrink-0">
              2023 – 2024
            </span>
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <section className="pt-4 flex flex-wrap items-center gap-4">
        <Button
          href="/projects"
          variant="primary"
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Explore Project Case Studies
        </Button>
        <Button
          href={siteConfig.resumePdfUrl}
          download="Rounak_Kumar_Resume.pdf"
          variant="secondary"
          icon={<Download className="w-4 h-4" />}
        >
          Download Official Resume
        </Button>
      </section>
    </div>
  );
}
