"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when drawer is open and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const isNavActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="lg:hidden">
      {/* Top Mobile Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 backdrop-blur-md px-5 flex items-center justify-between z-40 transition-colors">
        <Link href="/" className="flex flex-col">
          <span className="font-semibold text-sm tracking-tight text-[var(--text-primary)]">
            {siteConfig.name}
          </span>
          <span className="font-mono text-[10px] tracking-wider text-[var(--text-muted)] uppercase">
            {siteConfig.title}
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="p-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--border-medium)] transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Drawer Backdrop */}
      {isOpen && (
        <div
          role="presentation"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity"
        />
      )}

      {/* Slide-out Drawer */}
      <aside
        className={`fixed top-0 bottom-0 right-0 w-[82%] max-w-sm bg-[var(--sidebar-bg)] border-l border-[var(--sidebar-border)] p-6 z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation Menu"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]">
            <div>
              <span className="block font-semibold text-sm text-[var(--text-primary)]">
                {siteConfig.name}
              </span>
              <span className="block font-mono text-[10px] text-[var(--text-muted)] mt-0.5 uppercase">
                {siteConfig.title}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1.5" aria-label="Mobile Drawer Pages">
            {siteConfig.navItems.map((item) => {
              const active = isNavActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-xs font-mono transition-all ${
                    active
                      ? "bg-[var(--accent-subtle)] text-[var(--accent)] font-medium border-l-2 border-[var(--accent)] pl-2.5"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                  }`}
                >
                  <span
                    className={`text-[11px] tabular-nums ${
                      active ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span className="tracking-wide text-sm">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom */}
        <div className="pt-6 border-t border-[var(--border-subtle)] space-y-4">
          <div className="flex items-center justify-around">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2 rounded border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Send Email"
              className="p-2 rounded border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <ThemeToggle />
        </div>
      </aside>
    </div>
  );
}
