import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import Button from "@/components/ui/Button";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="Introduction & Overview"
      className="relative pt-6 sm:pt-8 lg:pt-9 pb-6 sm:pb-8 lg:pb-8 border-b border-[var(--border-subtle)] overflow-hidden lg:min-h-[460px] xl:min-h-[490px]"
    >
      {/* Layer 2: Subtle Studio Environmental Lighting (Warm Red from Left, Cool Blue from Right) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Left Warm / Red Studio Light — Soft diffused wash originating outside the viewport on the left */}
        <div
          className="absolute -left-[180px] sm:-left-[240px] lg:-left-[280px] top-[12%] sm:top-[8%] lg:top-[5%] w-[420px] sm:w-[580px] lg:w-[760px] h-[420px] sm:h-[580px] lg:h-[760px] rounded-full bg-[radial-gradient(circle_at_30%_50%,rgba(225,29,72,0.035)_0%,rgba(225,29,72,0.012)_45%,transparent_70%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(225,29,72,0.09)_0%,rgba(225,29,72,0.025)_50%,transparent_70%)] blur-[70px] sm:blur-[100px] lg:blur-[130px]"
        />

        {/* Right Cool / Blue Studio Light — Soft diffused wash originating outside the viewport on the right */}
        <div
          className="absolute -right-[180px] sm:-right-[240px] lg:-right-[260px] top-[15%] sm:top-[6%] lg:top-[2%] w-[440px] sm:w-[600px] lg:w-[780px] h-[440px] sm:h-[600px] lg:h-[780px] rounded-full bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.04)_0%,rgba(37,99,235,0.015)_45%,transparent_70%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.11)_0%,rgba(37,99,235,0.03)_50%,transparent_70%)] blur-[70px] sm:blur-[100px] lg:blur-[130px]"
        />
      </div>

      {/* Layer 3: Desktop Large Transparent Portrait Cutout (Approved Desktop Composition: Behind/Within Hero Right) */}
      <div
        aria-hidden="true"
        className="hidden lg:flex pointer-events-none select-none absolute right-[-15px] lg:right-[-6px] xl:right-2 bottom-0 z-[1] items-end justify-end"
      >
        <div className="relative w-[400px] xl:w-[450px] aspect-[1162/1353] [mask-image:linear-gradient(to_bottom,black_84%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_84%,transparent_100%)]">
          <Image
            src="/Image_no_bg.png"
            alt="Rounak Kumar — Full-Stack Developer portrait"
            fill
            priority
            sizes="450px"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* Layer 4: Foreground Hero Content & Interactive Elements */}
      <div className="relative z-10 max-w-xl lg:max-w-[460px] xl:max-w-[510px]">
        {/* Credential Status (wraps naturally on narrow viewports) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2.5 sm:mb-3">
          <span className="font-mono text-xs font-medium text-[var(--accent)]">
            BCA — VIT Vellore
          </span>
          <span className="text-[var(--border-strong)]">|</span>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            CGPA 9.09 • Class of 2027
          </span>
        </div>

        {/* Primary Name & Role */}
        <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-1.5">
          {siteConfig.name}
        </h1>
        <p className="font-mono text-xs sm:text-sm md:text-base tracking-wider text-[var(--text-muted)] uppercase mb-3.5 sm:mb-4">
          {siteConfig.title}
        </p>

        {/* Core Technical Statement (Intentional clean 2-line break on mobile) */}
        <p className="text-base sm:text-lg lg:text-xl text-[var(--text-primary)] font-medium leading-snug mb-2.5 sm:mb-3 max-w-lg [text-wrap:balance]">
          <span className="block sm:inline">Building modern web applications </span>
          <span className="block sm:inline">from interface to backend.</span>
        </p>

        {/* Supporting description */}
        <p className="text-xs sm:text-sm lg:text-[15px] text-[var(--text-secondary)] leading-relaxed mb-5 sm:mb-6 max-w-lg">
          Designing and engineering production-ready web systems — combining clean, accessible frontend architectures with resilient API services, transactional databases, and verified tenant isolation.
        </p>

        {/* Call to Actions */}
        <div className="relative z-20 flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-6">
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
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-md bg-[var(--bg-subtle)]/80 hover:bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in touch</span>
          </Link>
        </div>

        {/* Layer 3-Mobile: Unobstructed Mobile Portrait (Flows naturally between CTAs and Specs on mobile viewports) */}
        <div
          aria-hidden="true"
          className="lg:hidden relative z-[1] mx-auto my-4 sm:my-6 w-[230px] sm:w-[280px] aspect-[1162/1353] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] pointer-events-none select-none"
        >
          <Image
            src="/Image_no_bg.png"
            alt="Rounak Kumar — Full-Stack Developer portrait"
            fill
            priority
            sizes="(max-width: 640px) 230px, 280px"
            className="object-contain object-bottom"
          />
        </div>

        {/* Quick Technical Specs Grid (Compact 2x2 telemetry, perfectly grounds vacant space, zero portrait overlap) */}
        <div className="relative pt-4 sm:pt-4.5 border-t border-[var(--border-subtle)] max-w-xl lg:max-w-[420px] xl:max-w-[460px]">
          <div className="grid grid-cols-2 gap-x-5 gap-y-3 sm:gap-x-6 sm:gap-y-3 text-xs font-mono">
            <div className="space-y-0.5">
              <span className="text-[var(--text-muted)] block text-[10px] sm:text-[11px] tracking-wider uppercase">
                PRIMARY STACK
              </span>
              <span className="text-[var(--text-primary)] font-medium text-xs">
                Next.js · Node · Postgres
              </span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[var(--text-muted)] block text-[10px] sm:text-[11px] tracking-wider uppercase">
                CORE FOCUS
              </span>
              <span className="text-[var(--text-primary)] font-medium text-xs">
                Multi-Tenant Systems
              </span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[var(--text-muted)] block text-[10px] sm:text-[11px] tracking-wider uppercase">
                LOCATION
              </span>
              <span className="text-[var(--text-primary)] font-medium text-xs">
                Vellore / New Delhi
              </span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[var(--text-muted)] block text-[10px] sm:text-[11px] tracking-wider uppercase">
                STATUS
              </span>
              <span className="text-[var(--text-primary)] font-medium text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Open for Roles</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
