import React from "react";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 sm:mb-10 ${className}`}>
      {tag && (
        <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2 flex items-center gap-2">
          <span>{tag}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
