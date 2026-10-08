import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-all ${
        hover
          ? "hover:border-[var(--border-medium)] hover:bg-[var(--card-hover)] hover:shadow-[var(--shadow-subtle)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
