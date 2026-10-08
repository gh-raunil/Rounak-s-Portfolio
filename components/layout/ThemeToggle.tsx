"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme =
      (document.documentElement.getAttribute("data-theme") as "dark" | "light") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(currentTheme);

    // Listen to OS preference changes if user hasn't explicitly set localStorage
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        setTheme(newTheme);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle light or dark theme"
        className={`flex items-center justify-between w-full px-3 py-2 text-xs font-mono rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] transition-colors ${className}`}
      >
        <span className="flex items-center gap-2">
          <Moon className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          <span>Theme</span>
        </span>
        <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Dark</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`flex items-center justify-between w-full px-3 py-2 text-xs font-mono rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] hover:bg-[var(--card-hover)] hover:border-[var(--border-medium)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer ${className}`}
    >
      <span className="flex items-center gap-2">
        {theme === "dark" ? (
          <Moon className="w-3.5 h-3.5 text-[var(--accent)]" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-[var(--accent)]" />
        )}
        <span>Theme</span>
      </span>
      <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] group-hover:text-[var(--text-primary)]">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
