import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 flex flex-col items-center justify-center text-center space-y-6">
      <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] px-3 py-1 rounded bg-[var(--accent-subtle)] border border-[var(--accent-border)]">
        404 — Not Found
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
        Route Does Not Exist
      </h1>

      <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md leading-relaxed">
        The requested endpoint or document cannot be resolved. Please verify the URL or return to the main application navigation.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Button
          href="/"
          variant="primary"
          size="md"
          icon={<Home className="w-4 h-4" />}
          iconPosition="left"
        >
          Return Home
        </Button>

        <Button
          href="/projects"
          variant="outline"
          size="md"
          icon={<ArrowLeft className="w-4 h-4" />}
          iconPosition="left"
        >
          View Projects
        </Button>
      </div>
    </div>
  );
}
