"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import ThemeToggle from "./ThemeToggle";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

export default function Sidebar() {
  const pathname = usePathname();

  const isNavActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <aside
      className="hidden lg:flex fixed top-0 bottom-0 left-0 w-64 xl:w-72 flex-col justify-between border-r border-[var(--sidebar-border)] bg-[var(--sidebar-bg)] p-6 z-40 transition-colors select-none"
      aria-label="Primary Portfolio Navigation"
    >
      {/* Top Identity */}
      <div>
        <Link href="/" className="group block focus:outline-none">
          <span className="block font-semibold tracking-tight text-[var(--text-primary)] text-sm group-hover:text-[var(--accent)] transition-colors">
            {siteConfig.name.toUpperCase()}
          </span>
          <span className="block font-mono text-[11px] tracking-widest text-[var(--text-muted)] mt-0.5 uppercase">
            {siteConfig.title}
          </span>
        </Link>

        {/* Status indicator */}
        <div className="mt-3.5 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-secondary)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span>Available for Roles</span>
        </div>

        {/* Primary Navigation */}
        <nav className="mt-8 space-y-1" aria-label="Main Pages">
          {siteConfig.navItems.map((item) => {
            const active = isNavActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 px-3 py-2 rounded-md text-xs font-mono transition-all ${
                  active
                    ? "bg-[var(--accent-subtle)] text-[var(--accent)] font-medium border-l-2 border-[var(--accent)] pl-2.5"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                }`}
              >
                <span
                  className={`text-[10px] tabular-nums transition-colors ${
                    active ? "text-[var(--accent)]" : "text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"
                  }`}
                >
                  {item.num}
                </span>
                <span className="tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Controls & Socials */}
      <div className="pt-6 border-t border-[var(--border-subtle)] space-y-4">
        {/* Direct Social Links */}
        <div className="flex items-center justify-between px-1">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors p-1.5 rounded hover:bg-[var(--bg-subtle)]"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors p-1.5 rounded hover:bg-[var(--bg-subtle)]"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors p-1.5 rounded hover:bg-[var(--bg-subtle)]"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Send Email"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors p-1.5 rounded hover:bg-[var(--bg-subtle)]"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Theme Switcher */}
        <ThemeToggle />
      </div>
    </aside>
  );
}
