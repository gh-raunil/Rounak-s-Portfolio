import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors";

  const variants = {
    default:
      "bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]",
    accent:
      "bg-[var(--accent-subtle)] text-[var(--accent-text)] border border-[var(--accent-border)] font-medium",
    outline:
      "bg-transparent text-[var(--text-secondary)] border border-[var(--border-subtle)]",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
