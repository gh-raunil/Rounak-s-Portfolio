import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

export default function ShortAbout() {
  const principles = [
    {
      title: "Full-Stack System Delivery",
      description:
        "Building end-to-end applications from accessible React and Next.js interfaces to Express/Node.js API layers and database schemas.",
    },
    {
      title: "Data Integrity & Multi-Tenancy",
      description:
        "Architecting software where tenant data is strictly protected, transactions are enforced at the database level, and business rules are verifiable.",
    },
    {
      title: "Engineering Discipline",
      description:
        "Writing maintainable TypeScript, structured Git workflows, rigorous schema validation with Zod, and clear separation of concerns.",
    },
  ];

  return (
    <section aria-label="About Summary" className="py-14 sm:py-18 border-b border-[var(--border-subtle)]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <SectionHeader
          tag="About"
          title="About & Engineering Approach"
          description="A Full-Stack Developer who builds modern web applications, interfaces, APIs, databases, and complete software systems."
          className="mb-0"
        />
        <Button
          href="/about"
          variant="outline"
          size="sm"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
          className="self-start sm:self-auto shrink-0"
        >
          Read Full Background
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {principles.map((item) => (
          <Card key={item.title} hover className="flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)]">
            Academic & Professional Snapshot
          </div>
          <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
            BCA Candidate at VIT Vellore (9.09 CGPA) & Former Intern at Cognify Digital
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Experienced with real-world development cycles, responsive component libraries, and REST integrations.
          </p>
        </div>
        <Link
          href="/experience"
          className="shrink-0 text-xs font-mono text-[var(--accent)] hover:text-[var(--accent-hover)] flex items-center gap-1.5"
        >
          <span>View Experience Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
