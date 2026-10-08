import { ProjectArchitectureLayer } from "@/data/projectsData";
import Badge from "@/components/ui/Badge";

interface ArchitectureDiagramProps {
  layers: ProjectArchitectureLayer[];
  projectSlug?: string;
}

export default function ArchitectureDiagram({
  layers,
  projectSlug = "pet-protocols",
}: ArchitectureDiagramProps) {
  const isTuition = projectSlug === "tuition-management";

  const flows = isTuition
    ? [
        {
          title: "Institutional Operations",
          steps: [
            "Coaching Admin / Staff Portal",
            "↓ Next.js 14 Client Dashboard",
            "Express.js REST API Engine",
            "↓ Zod Schema Validation Gate",
            "PostgreSQL Database Queries",
          ],
          highlight: "Role-Based Academic Control",
        },
        {
          title: "Financial Ledger Transactions",
          steps: [
            "Fee Payment Recording Trigger",
            "↓ Student Balance & Invoice Sync",
            "PostgreSQL Transaction Boundary",
            "↓ BEGIN ... COMMIT ACID Execution",
            "Settled Revenue Ledger Credit",
          ],
          highlight: "Zero Accrual Discrepancy",
        },
        {
          title: "Tenant Isolation Layer",
          steps: [
            "Incoming HTTP Request",
            "↓ JWT Tenant Claims Verification",
            "Repository Query Middleware",
            "↓ Injected WHERE tenant_id = $1",
            "Zero Cross-Tenant Leakage",
          ],
          highlight: "Guaranteed Multi-Tenancy",
        },
      ]
    : [
        {
          title: "Customer Storefront Flow",
          steps: [
            "Customer Browser / Mobile PWA",
            "↓ HTTP / Zustand Store Sync",
            "User Storefront Surface",
            "↓ REST API (JWT Auth Middleware)",
            "MongoDB Document Collections",
          ],
          highlight: "Dynamic Menu Browsing",
        },
        {
          title: "Payment Settlement Flow",
          steps: [
            "Checkout Trigger & Address Entry",
            "↓ Server-Side Order Initiation",
            "Razorpay Payment Gateway SDK",
            "↓ HMAC-SHA256 Webhook Callback",
            "Verified Order Settlement Status",
          ],
          highlight: "Cryptographic Verification",
        },
        {
          title: "Kitchen & Governance Flow",
          steps: [
            "Restaurant Admin / Superadmin",
            "↓ Role Guarded Route Handlers",
            "Centralized Node.js API Service",
            "↓ Multi-Tenant Boundary Checks",
            "Tenant-Partitioned Food Orders",
          ],
          highlight: "Isolated Kitchen Stages",
        },
      ];

  return (
    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-6 sm:p-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block">
            System Topology
          </span>
          <h4 className="font-semibold text-base text-[var(--text-primary)]">
            Component Decomposition & Service Boundaries
          </h4>
        </div>
        <span className="text-xs font-mono text-[var(--text-muted)]">
          {layers.length} Architecture Layers
        </span>
      </div>

      {/* Visual Service Flow Topology */}
      <div className="p-4 sm:p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--card-bg)] text-xs font-mono space-y-3">
        <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block font-bold">
          High-Level Request & Service Flow
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {flows.map((flow) => (
            <div
              key={flow.title}
              className="p-3 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-1.5 flex flex-col justify-between"
            >
              <div>
                <span className="text-[var(--accent)] font-semibold block text-xs">
                  {flow.title}
                </span>
                <div className="text-[11px] text-[var(--text-secondary)] space-y-1 mt-2">
                  {flow.steps.map((st, i) => (
                    <div
                      key={i}
                      className={
                        st.startsWith("↓")
                          ? "text-[var(--text-muted)] text-[10px]"
                          : i === flow.steps.length - 1
                          ? "text-[var(--text-primary)] font-semibold"
                          : ""
                      }
                    >
                      {st}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)]">
                {flow.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layer Decomposition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {layers.map((layer, idx) => (
          <div
            key={layer.title}
            className="rounded-lg border border-[var(--border-subtle)] bg-[var(--card-bg)] p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-medium text-[var(--accent)]">
                  Layer 0{idx + 1}
                </span>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  {layer.role}
                </span>
              </div>

              <h5 className="font-semibold text-sm sm:text-base text-[var(--text-primary)] mb-3">
                {layer.title}
              </h5>

              <ul className="space-y-2 mb-4 text-xs text-[var(--text-secondary)] leading-relaxed">
                {layer.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] mt-0.5 select-none font-mono">
                      ↳
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
              {layer.tech.map((t) => (
                <Badge key={t} variant="outline" className="text-[10px] py-0.5">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
