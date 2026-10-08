"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

export default function ContactView() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [copiedFormMessage, setCopiedFormMessage] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) {
      setValidationError("Please enter your name.");
      return;
    }
    if (!email || !validateEmail(email)) {
      setValidationError("Please enter a valid email address.");
      return;
    }
    if (!subject) {
      setValidationError("Please provide a subject line.");
      return;
    }
    if (!message) {
      setValidationError("Please enter your message content.");
      return;
    }

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}\n\n---\nSent via portfolio contact form`
    );

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`;

    // Launch configured mail client
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  const handleCopyFormattedText = () => {
    const formatted = `To: ${siteConfig.email}\nSubject: ${formData.subject || "Project / Engineering Inquiry"}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedFormMessage(true);
    setTimeout(() => setCopiedFormMessage(false), 2500);
  };

  return (
    <div className="space-y-10">
      <SectionHeader
        tag="Contact"
        title="Direct Communication & Contact"
        description="Reach out directly for software engineering opportunities, technical collaborations, or system architecture inquiries."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Direct Contacts & Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="space-y-5">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block mb-1">
                Direct Contact
              </span>
              <h2 className="text-base font-semibold text-[var(--text-primary)]">
                Communication Channels
              </h2>
            </div>

            {/* Email Card */}
            <div className="p-3.5 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] flex items-center justify-between gap-3">
              <div className="overflow-hidden">
                <span className="text-[11px] font-mono text-[var(--text-muted)] block uppercase">
                  Email Address
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs sm:text-sm font-mono text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors truncate block"
                >
                  {siteConfig.email}
                </a>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(siteConfig.email, "email")}
                aria-label="Copy email address"
                className="p-1.5 rounded border border-[var(--border-subtle)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer shrink-0"
                title="Copy to clipboard"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-3.5 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] flex items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono text-[var(--text-muted)] block uppercase">
                  Phone / WhatsApp
                </span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="text-xs sm:text-sm font-mono text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(siteConfig.phone, "phone")}
                aria-label="Copy phone number"
                className="p-1.5 rounded border border-[var(--border-subtle)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer shrink-0"
                title="Copy to clipboard"
              >
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Location */}
            <div className="pt-2 text-xs font-mono text-[var(--text-muted)] flex items-center justify-between">
              <span>LOCATION BASE:</span>
              <span className="text-[var(--text-primary)]">{siteConfig.location}</span>
            </div>
          </Card>

          {/* Social Profiles */}
          <Card className="space-y-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block mb-1">
                Profiles
              </span>
              <h2 className="text-base font-semibold text-[var(--text-primary)]">
                Online Presence
              </h2>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-subtle)] hover:bg-[var(--card-hover)] hover:border-[var(--border-medium)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-[var(--accent)]" />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-subtle)] hover:bg-[var(--card-hover)] hover:border-[var(--border-medium)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[var(--accent)]" />
                  <span>LinkedIn Network</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </a>

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-subtle)] hover:bg-[var(--card-hover)] hover:border-[var(--border-medium)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <InstagramIcon className="w-4 h-4 text-[var(--accent)]" />
                  <span>Instagram</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </a>
            </div>
          </Card>
        </div>

        {/* Right: Functional Direct Inquiry Form (7 cols) */}
        <div className="lg:col-span-7">
          <Card className="space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block mb-1">
                Message Dispatch
              </span>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                Compose Message
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                This form prepares your message and launches your configured email client addressed directly to <code>{siteConfig.email}</code>.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Engineering Lead / Recruiter"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@company.com"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Engineering Role / Project Discussion"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Details regarding your role, technical requirements, or collaboration scope..."
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-y"
                />
              </div>

              {validationError && (
                <div className="p-2.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono">
                  {validationError}
                </div>
              )}

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={<Send className="w-3.5 h-3.5" />}
                  >
                    Prepare & Open in Email Client
                  </Button>

                  <Button
                    type="button"
                    onClick={handleCopyFormattedText}
                    variant="outline"
                    size="md"
                    icon={<Copy className="w-3.5 h-3.5" />}
                  >
                    {copiedFormMessage ? "Copied to Clipboard!" : "Copy Formatted Text"}
                  </Button>
                </div>

                {formSubmitted && (
                  <span className="text-xs font-mono text-emerald-500 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Email client launched with message</span>
                  </span>
                )}
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
