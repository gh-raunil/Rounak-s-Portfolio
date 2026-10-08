import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import Button from "@/components/ui/Button";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="Introduction & Overview"
      className="relative pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 border-b border-[var(--border-subtle)] overflow-hidden"
    >
      {/* Layer 1 & 2: Background Ambient Depth (Theme-Aware Environment) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[5%] sm:right-[12%] top-[6%] w-[280px] sm:w-[460px] h-[280px] sm:h-[460px] rounded-full bg-[var(--accent)]/5 dark:bg-[var(--accent)]/8 blur-3xl -z-10"
      />

      {/* Layer 3: Large Transparent Portrait Cutout (Integrated Hero Canvas Layer) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[-10px] sm:right-[-5px] md:right-0 lg:right-[-1%] xl:right-2 bottom-0 top-auto z-0 flex items-end justify-end"
      >
        <div className="relative w-[270px] sm:w-[350px] md:w-[430px] lg:w-[520px] xl:w-[600px] 2xl:w-[660px] aspect-[1162/1353] [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]">
          <Image
            src="/Image_no_bg.png"
            alt="Rounak Kumar — Full-Stack Developer portrait cutout"
            fill
            priority
            sizes="(max-width: 640px) 280px, (max-width: 768px) 430px, (max-width: 1024px) 520px, 660px"
            className="object-contain object-bottom filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_24px_50px_rgba(0,0,0,0.55)]"
          />
        </div>
      </div>

      {/* Layer 4: Soft Directional Readability Wash (Guarantees Text Legibility Across Themes) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-y-0 left-0 w-full sm:w-[85%] md:w-[75%] lg:w-[65%] z-[5] bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/85 to-transparent"
      />

      {/* Layer 5: Foreground Hero Content & Interactive Elements */}
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
