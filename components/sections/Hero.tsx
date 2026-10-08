import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import Button from "@/components/ui/Button";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="Introduction & Overview"
      className="pt-4 pb-12 sm:pb-16 lg:pb-20 border-b border-[var(--border-subtle)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Typography & Actions (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          {/* Credential Status */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-medium text-[var(--accent)]">
              BCA — VIT Vellore
            </span>
            <span className="text-[var(--border-strong)]">|</span>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              CGPA 9.09 • Class of 2027
            </span>
          </div>

          {/* Primary Name & Role */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-2">
            {siteConfig.name}
          </h1>
          <p className="font-mono text-sm sm:text-base tracking-wider text-[var(--text-muted)] uppercase mb-6">
            {siteConfig.title}
          </p>

          {/* Core Technical Statement */}
          <p className="text-lg sm:text-xl text-[var(--text-primary)] font-medium leading-snug mb-4 max-w-xl">
            {siteConfig.tagline}
          </p>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
            Designing and engineering production-ready web systems — combining clean, accessible frontend architectures with resilient API services, transactional databases, and verified tenant isolation.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <Button
              href="/projects"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Projects
            </Button>

            <Button
              href={siteConfig.resumePdfUrl}
              download="Rounak_Kumar_Resume.pdf"
              variant="secondary"
              size="md"
              icon={<Download className="w-4 h-4" />}
            >
              Download Resume
            </Button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in touch</span>
            </Link>
          </div>

          {/* Quick Technical Specs Row */}
          <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-xs font-mono">
            <div>
              <span className="text-[var(--text-muted)] block text-[11px]">PRIMARY STACK</span>
              <span className="text-[var(--text-primary)] font-medium">Next.js • Node.js • Postgres</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[11px]">CORE FOCUS</span>
              <span className="text-[var(--text-primary)] font-medium">Multi-Tenant Systems & APIs</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[11px]">LOCATION</span>
              <span className="text-[var(--text-primary)] font-medium">Vellore / New Delhi, IN</span>
            </div>
          </div>
        </div>

        {/* Right Portrait Column (5 cols on desktop) */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-[16/10] lg:aspect-[16/11] rounded-2xl overflow-hidden border border-[var(--border-medium)] bg-[var(--card-bg)] shadow-[var(--shadow-elevated)] group">
            <Image
              src="/portrait.png"
              alt="Rounak Kumar — Full-Stack Developer portrait"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
              className="object-cover object-[center_18%] filter saturate-[1.03] transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {/* Subtle inner perimeter vignette */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            {/* Subtle bottom identifier bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between text-white text-xs font-mono">
              <span className="text-neutral-300">Rounak Kumar</span>
              <span className="text-neutral-400 text-[11px]">Full-Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
