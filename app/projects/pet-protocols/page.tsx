import type { Metadata } from "next";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ArchitectureDiagram from "@/components/projects/ArchitectureDiagram";
import PetProtocolsWalkthrough from "@/components/projects/PetProtocolsWalkthrough";
import { GithubIcon } from "@/components/ui/Icons";
import { ExternalLink, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Pet Protocols — Case Study",
  description:
    "Engineering case study of Pet Protocols, a multi-tenant full-stack food ordering platform built with Next.js, Node.js, MongoDB, Zustand, and Razorpay.",
};

export default function PetProtocolsPage() {
  const project = projectsData["pet-protocols"];

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

        {/* Essential Notice Banner */}
        <div className="mt-6 p-4 rounded-lg bg-[var(--bg-subtle)] border-l-4 border-[var(--accent)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          <div>
            <strong className="text-[var(--text-primary)] block font-semibold mb-0.5">
              Domain Clarification
            </strong>
            Pet Protocols is strictly a <strong>food ordering and multi-tenant restaurant platform</strong>. Despite the project name, it does not involve animals, pet care, or veterinary services.
          </div>
        </div>

        {/* Quick Action Links */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="primary"
              size="md"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Open Live Application
            </Button>
          )}

          <Button
            href={project.githubUrl}
            variant="outline"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
            icon={<GithubIcon className="w-4 h-4" />}
            iconPosition="left"
          >
            GitHub Repository
          </Button>
        </div>
      </div>

      {/* Stack Badges */}
      <section className="pt-6 border-t border-[var(--border-subtle)]">
        <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-3">
          Core Technologies & Tools
        </span>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
        </div>
      </section>

      {/* Interactive Inside Pet Protocols Walkthrough */}
      <PetProtocolsWalkthrough />

      {/* Problem & Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-2 mb-3 text-[var(--accent)] font-mono text-xs uppercase tracking-wider">
            <span>The Problem</span>
          </div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            Monolithic Aggregators vs Single-Tenant Overhead
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
            Multi-Tenant Surface Decoupling
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

      {/* Deep Dive: Application Surfaces */}
      <section className="space-y-6">
        <div className="border-b border-[var(--border-subtle)] pb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block">
            Application Surfaces
          </span>
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            Application Surface Breakdown
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

      {/* Technical Highlights: State, Auth, Payments */}
      <section className="space-y-6">
        <div className="border-b border-[var(--border-subtle)] pb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block">
            Subsystem Implementation
          </span>
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            State, Payments & Authorization Workflows
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] space-y-3">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              Cart State (Zustand)
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Implemented atomic client-side cart updates with persistent storage sync. Eliminates redundant full-tree React re-renders while navigating dish categories, modifying item quantities, or toggling add-ons.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] space-y-3">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              Razorpay Integration
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Order initiation registers on the server before client checkout invocation. Webhook endpoints cryptographically verify HMAC-SHA256 signatures to prevent unauthorized client status overrides.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] space-y-3">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              PWA / Android TWA
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Equipped with Web App Manifest definitions, service worker asset caching, and Trusted Web Activity (TWA) compliance for streamlined Android package distribution without native codebase duplication.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Decisions */}
      <section className="space-y-6">
        <div className="border-b border-[var(--border-subtle)] pb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block">
            Technical Tradeoffs
          </span>
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            Technical Decisions & Rationale
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
          href="/projects/tuition-management"
          className="text-xs font-mono text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          Next Case Study: Tuition Management System →
        </Link>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="outline"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Live Demo
            </Button>
          )}
          <Button
            href={project.githubUrl}
            variant="primary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            icon={<GithubIcon className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            GitHub Repository
          </Button>
        </div>
      </div>
    </article>
  );
}
