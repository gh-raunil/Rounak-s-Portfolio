import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import Button from "@/components/ui/Button";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="Introduction & Overview"
      className="relative pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 border-b border-[var(--border-subtle)] overflow-hidden lg:min-h-[580px] xl:min-h-[640px]"
    >
      {/* Layer 2: Subtle Studio Environmental Lighting (Warm Red from Left, Cool Blue from Right) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Left Warm / Red Studio Light — Soft diffused crimson wash illuminating from the left */}
        <div
          className="absolute -left-[20%] sm:-left-[12%] lg:left-[0%] top-[15%] sm:top-[12%] w-[280px] sm:w-[440px] lg:w-[620px] h-[280px] sm:h-[440px] lg:h-[620px] rounded-full bg-[radial-gradient(circle,rgba(225,29,72,0.04)_0%,rgba(225,29,72,0.015)_45%,transparent_75%)] dark:bg-[radial-gradient(circle,rgba(225,29,72,0.10)_0%,rgba(225,29,72,0.03)_50%,transparent_75%)] blur-[60px] sm:blur-[90px] lg:blur-[120px]"
        />

        {/* Right Cool / Blue Studio Light — Soft diffused blue wash illuminating from the right */}
        <div
          className="absolute -right-[15%] sm:-right-[8%] lg:right-[-2%] top-[10%] sm:top-[6%] w-[300px] sm:w-[460px] lg:w-[640px] h-[300px] sm:h-[460px] lg:h-[640px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.045)_0%,rgba(37,99,235,0.016)_45%,transparent_75%)] dark:bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,rgba(37,99,235,0.035)_50%,transparent_75%)] blur-[60px] sm:blur-[90px] lg:blur-[120px]"
        />
      </div>

      {/* Layer 3: Large Transparent Portrait Cutout (Integrated Hero Canvas Layer, Sized to Prevent Cropping) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[-10px] sm:right-0 lg:right-2 xl:right-6 bottom-0 z-[1] flex items-end justify-end"
      >
        <div className="relative w-[240px] sm:w-[310px] md:w-[380px] lg:w-[460px] xl:w-[520px] aspect-[1162/1353] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
          <Image
            src="/Image_no_bg.png"
            alt="Rounak Kumar — Full-Stack Developer portrait"
            fill
            priority
            sizes="(max-width: 640px) 240px, (max-width: 768px) 380px, (max-width: 1024px) 460px, 520px"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* Layer 4: Foreground Hero Content & Interactive Elements */}
      <div className="relative z-10 max-w-xl lg:max-w-2xl flex flex-col justify-center">
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
        <div className="relative z-20 flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
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

        {/* Quick Technical Specs Row */}
        <div className="relative pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-xs font-mono max-w-xl lg:max-w-2xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 right-0 sm:right-24 h-px bg-gradient-to-r from-[var(--border-subtle)] via-[var(--border-subtle)]/70 to-transparent"
          />
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
    </section>
  );
}
