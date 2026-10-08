import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function TechnicalFocus() {
  const domains = [
    {
      category: "Frontend & Interfaces",
      stack: ["Next.js", "React", "Tailwind CSS", "HTML5 / CSS3", "Zustand"],
      description:
        "Building responsive, accessible web interfaces and component systems with clean state orchestration and fast render performance.",
    },
    {
      category: "Backend & Systems",
      stack: ["Node.js", "Express.js", "REST APIs", "TypeScript", "Django"],
      description:
        "Structuring modular backend services, request validation pipelines, authentication layers, and multi-tenant authorization logic.",
    },
    {
      category: "Databases & Data Integrity",
      stack: ["PostgreSQL", "MongoDB", "Mongoose", "ACID Transactions"],
      description:
        "Modeling relational schemas and document collections with strict constraints, transactional blocks, and query efficiency.",
    },
    {
      category: "Auth, Payments & Tooling",
      stack: ["NextAuth", "JWT", "Razorpay", "Git", "GitHub", "Vercel"],
      description:
        "Cryptographic signature verification, payment gateway integrations, token lifecycle management, and CI/CD hosting workflows.",
    },
  ];

  return (
    <section aria-label="Technical Capabilities" className="py-14 sm:py-18 border-b border-[var(--border-subtle)]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <SectionHeader
          tag="Skills & Architecture"
          title="Technical Focus & Taxonomy"
          description="A structured taxonomy of technologies, architectural patterns, and production tools without arbitrary percentages or progress bars."
          className="mb-0"
        />
        <Button
          href="/skills"
          variant="outline"
          size="sm"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
          className="self-start sm:self-auto shrink-0"
        >
          View Full Skill Taxonomy
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {domains.map((dom) => (
          <div
            key={dom.category}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 flex flex-col justify-between hover:border-[var(--border-medium)] transition-all"
          >
            <div>
              <h3 className="font-semibold text-base text-[var(--text-primary)] mb-2">
                {dom.category}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {dom.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
              {dom.stack.map((item) => (
                <Badge key={item} variant="default">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
