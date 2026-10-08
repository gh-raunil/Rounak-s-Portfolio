import { siteConfig } from "@/data/siteConfig";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

export default function ContactCTA() {
  return (
    <section aria-label="Direct Communication & Collaboration" className="pt-14 sm:pt-18 pb-8">
      <SectionHeader
        tag="Contact"
        title="Let's build something."
        description="Available for full-stack engineering roles, software development opportunities, and technical collaborations."
      />

      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
              Whether you are recruiting for software engineering roles, evaluating systems architecture for a new product, or seeking a technical collaborator, feel free to reach out directly.
            </p>

            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Mail className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[var(--accent)] transition-colors underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Phone className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[var(--accent)] transition-colors underline-offset-4 hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:justify-end">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Open Contact Form
            </Button>

            <Button
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              icon={<GithubIcon className="w-4 h-4" />}
              iconPosition="left"
            >
              GitHub Profile
            </Button>
          </div>
        </div>

        {/* Social link strip */}
        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-[var(--text-muted)]">Direct Network Profiles:</span>
          <div className="flex items-center gap-4 text-[var(--text-secondary)]">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
