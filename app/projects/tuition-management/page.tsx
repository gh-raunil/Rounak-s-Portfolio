import type { Metadata } from "next";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ArchitectureDiagram from "@/components/projects/ArchitectureDiagram";
import { GithubIcon } from "@/components/ui/Icons";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Tuition & Coaching Management — Case Study",
  description:
    "Engineering case study of Multi-Tenant Tuition & Coaching Management System built with Express.js, TypeScript, PostgreSQL, Zod, and Next.js 14.",
};

export default function TuitionManagementPage() {
  const project = projectsData["tuition-management"];

  return (
    <article className="space-y-12">
      {/* Back Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Badge variant="accent">{project.badge}</Badge>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            Timeline: {project.timeline}
          </span>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            Role: {project.role}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          {project.positioning}
        </p>

        {/* Action Link: ONLY GitHub (strictly no fake live link) */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            href={project.githubUrl}
            variant="primary"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
            icon={<GithubIcon className="w-4 h-4" />}
            iconPosition="left"
          >
            GitHub Repository
          </Button>

          <span className="text-xs font-mono text-[var(--text-muted)]">
            Production Repository • Full Backend & Multi-Portal Architecture
          </span>
        </div>
      </div>

      {/* Stack Badges */}
      <section className="pt-6 border-t border-[var(--border-subtle)]">
        <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-3">
          Engineered Stack & Runtime
        </span>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-2 mb-3 text-[var(--accent)] font-mono text-xs uppercase tracking-wider">
            <span>The Problem</span>
          </div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            Spreadsheet Sprawl & Distorted Accrual Accounting
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.problem}
          </p>
        </Card>

        <Card>
          <div className="flex items-center gap-2 mb-3 text-[var(--accent)] font-mono text-xs uppercase tracking-wider">
            <span>The Solution</span>
          </div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            Multi-Tenant Isolation & Transactional Settled Ledgers
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.solution}
          </p>
        </Card>
      </section>

      {/* System Architecture Diagram */}
      <section>
        <ArchitectureDiagram layers={project.architectureLayers} projectSlug={project.slug} />
      </section>

      {/* Deep Dive: Multi-Tenancy & Financial Logic */}
      <section className="space-y-6">
        <div className="border-b border-[var(--border-subtle)] pb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block">
            Multi-Tenancy & Integrity
          </span>
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            Multi-Tenancy, Revenue Calculations & Security
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] space-y-3">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              Query Tenant Isolation
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Every database read and write query enforces programmatic tenant scoping. Cross-tenant queries are halted at the repository layer, ensuring complete data containment across branches and organizations.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] space-y-3">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              Settled-Payment Analytics
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Revenue metrics sum actual settled cash payments rather than hypothetical issued invoices. Prevents financial distortion from student dropouts, fee defaults, or pending split installments.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] space-y-3">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              Printable A4 Receipt Engine
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Engineered precise print-media CSS layouts that render professional A4 receipts with coaching branding, serial numbers, fee schedules, and tax items directly from the browser without cloud PDF costs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Functional Modules */}
      <section className="space-y-6">
        <div className="border-b border-[var(--border-subtle)] pb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block">
            System Capabilities
          </span>
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            Academic Operations & Administrative Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.keyFeatures.map((feat) => (
            <Card key={feat.title} className="flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-base text-[var(--text-primary)] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-4">
                  {feat.description}
                </p>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {feat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] select-none">↳</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Decisions */}
      <section className="space-y-6">
        <div className="border-b border-[var(--border-subtle)] pb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block">
            Technical Decisions
          </span>
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            Database Transactions, Schema Validation & Tradeoffs
          </h2>
        </div>

        <div className="space-y-4">
          {project.technicalDecisions.map((dec) => (
            <div
              key={dec.decision}
              className="p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-2 text-xs sm:text-sm"
            >
              <div className="font-semibold text-[var(--text-primary)]">
                {dec.decision}
              </div>
              <div className="text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Rationale: </strong>
                {dec.rationale}
              </div>
              <div className="text-[var(--accent)] font-mono text-xs">
                Outcome: {dec.outcome}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & What I Learned */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-4">
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">
            Engineering Challenges Overcome
          </h3>
          {project.challenges.map((c, i) => (
            <div key={i} className="text-xs sm:text-sm space-y-1">
              <span className="font-medium text-[var(--text-primary)] block">
                {c.challenge}
              </span>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {c.resolution}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-lg border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-4">
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">
            Key Engineering Takeaways
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.learnings.map((learn, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[var(--accent)] select-none">↳</span>
                <span>{learn}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer navigation */}
      <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/projects/pet-protocols"
          className="text-xs font-mono text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          ← Previous Case Study: Pet Protocols (Food Platform)
        </Link>

        <Button
          href={project.githubUrl}
          variant="primary"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
          icon={<GithubIcon className="w-3.5 h-3.5" />}
          iconPosition="left"
        >
          View Repository on GitHub
        </Button>
      </div>
    </article>
  );
}
