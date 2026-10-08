import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { siteConfig } from "@/data/siteConfig";
import { Download, ExternalLink, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Curriculum Vitae and professional credentials for Full-Stack Developer Rounak Kumar. Download official PDF document.",
};

export default function ResumePage() {
  const quickHighlights = [
    { label: "Degree", value: "BCA — VIT Vellore (2024–2027)" },
    { label: "Current CGPA", value: "9.09 / 10.0" },
    { label: "Internship", value: "Cognify Digital Pvt. Ltd. (Web Dev Intern)" },
    { label: "Core Stack", value: "Next.js, React, Node.js, Express, PostgreSQL, MongoDB" },
  ];

  return (
    <div className="space-y-10">
      <SectionHeader
        tag="Resume"
        title="Resume & Qualifications"
        description="Recruiter-friendly summary of academic standing, technical skill set, industry experience, and verified document download."
      />

      {/* Primary Action Bar */}
      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)] mb-1">
            Official Resume Document
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Latest verified PDF version featuring complete academic coursework and project history.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            href={siteConfig.resumePdfUrl}
            download="Rounak_Kumar_Resume.pdf"
            variant="primary"
            size="md"
            icon={<Download className="w-4 h-4" />}
          >
            Download Resume (PDF)
          </Button>

          <Button
            href={siteConfig.resumePdfUrl}
            target="_blank"
            variant="outline"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Open in New Tab
          </Button>
        </div>
      </div>

      {/* Recruiter Overview Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickHighlights.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-4 space-y-1"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
              {item.label}
            </span>
            <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] block">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Document Preview Container */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--text-muted)]">
            Document Preview
          </h3>
          <span className="text-xs font-mono text-[var(--accent)]">
            Format: Standard A4 PDF
          </span>
        </div>

        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] overflow-hidden shadow-[var(--shadow-subtle)] min-h-[550px] sm:min-h-[700px] flex flex-col">
          <iframe
            src={`${siteConfig.resumePdfUrl}#view=FitH`}
            title="Rounak Kumar Resume PDF Preview"
            className="w-full flex-1 min-h-[550px] sm:min-h-[700px] border-0"
          />
          <div className="p-3 bg-[var(--card-bg)] border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between text-xs text-[var(--text-muted)]">
            <span>Viewing: Rounak_Kumar_Resume.pdf</span>
            <a
              href={siteConfig.resumePdfUrl}
              download="Rounak_Kumar_Resume.pdf"
              className="text-[var(--accent)] hover:underline font-mono"
            >
              Click to download file if viewer does not render on your device
            </a>
          </div>
        </div>
      </section>

      {/* Recruiter Direct Contact Strip */}
      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-0.5 font-mono text-xs">
          <span className="text-[var(--text-muted)] uppercase tracking-wider block">
            Direct Recruiting Inquiries:
          </span>
          <div className="flex flex-wrap items-center gap-4 text-[var(--text-primary)] pt-1">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{siteConfig.email}</span>
            </span>
            <span className="text-[var(--border-strong)]">|</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{siteConfig.phone}</span>
            </span>
          </div>
        </div>

        <Button
          href="/contact"
          variant="outline"
          size="sm"
        >
          Contact Page
        </Button>
      </div>
    </div>
  );
}
