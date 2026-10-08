import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 lg:px-12 py-8 text-xs font-mono text-[var(--text-muted)] transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-[var(--text-secondary)] font-medium">
            {siteConfig.name}
          </span>
          <span className="mx-2 text-[var(--border-strong)]">/</span>
          <span>{siteConfig.title}</span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Contact
          </Link>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[var(--text-muted)]">
            VIT Vellore
          </span>
        </div>
      </div>
    </footer>
  );
}
