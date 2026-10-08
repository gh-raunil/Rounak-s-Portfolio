export interface ProjectArchitectureLayer {
  title: string;
  role: string;
  tech: string[];
  responsibilities: string[];
}

export interface ProjectSection {
  title: string;
  content: string;
  subsections?: { subtitle: string; details: string[] | string }[];
}

export interface ProjectData {
  slug: string;
  title: string;
  badge: string;
  role: string;
  timeline: string;
  summary: string;
  positioning: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  notice?: string;
  architectureLayers: ProjectArchitectureLayer[];
  problem: string;
  solution: string;
  keyFeatures: {
    title: string;
    description: string;
    items: string[];
  }[];
  technicalDecisions: {
    decision: string;
    rationale: string;
    outcome: string;
  }[];
  challenges: {
    challenge: string;
    resolution: string;
  }[];
  learnings: string[];
}

export const projectsData: Record<string, ProjectData> = {
  "pet-protocols": {
    slug: "pet-protocols",
    title: "Pet Protocols",
    badge: "Food Ordering Platform",
    role: "Full-Stack Developer",
    timeline: "2024",
    summary:
      "A modular, multi-tenant food ordering platform dividing customer commerce, restaurant kitchen fulfillment, and platform governance into three dedicated interface surfaces powered by Next.js, Node.js, MongoDB, and Razorpay.",
    positioning:
      "A multi-tenant full-stack food ordering platform built for high-throughput menu browsing, real-time checkout flows, multi-branch kitchen fulfillment, and centralized platform administration.",
    githubUrl: "https://github.com/gh-raunil/pet-protocols",
    liveUrl: "https://pet-protocols.vercel.app/",
    notice:
      "Architecture Clarification: Despite the repository name, Pet Protocols is strictly a food ordering and restaurant management platform with zero animal, veterinary, or pet-care functionality.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "NextAuth",
      "Razorpay",
      "Cloudinary",
      "Zustand",
      "Vercel",
      "PWA / Android TWA",
    ],
    architectureLayers: [
      {
        title: "Customer Frontend",
        role: "Client Web Application & PWA/TWA",
        tech: ["Next.js", "React", "Zustand", "Tailwind CSS"],
        responsibilities: [
          "Dynamic menu exploration, categorization, and item search",
          "Persistent client-side cart and quantity manipulation with Zustand",
          "Multi-address delivery management and user profile control",
          "End-to-end checkout pipeline with Razorpay payment SDK",
          "Real-time order timeline progression and status monitoring",
        ],
      },
      {
        title: "Restaurant Admin Portal",
        role: "Branch Operations & Kitchen Management",
        tech: ["Next.js", "React", "Tailwind CSS"],
        responsibilities: [
          "Dish catalog CRUD, categorical grouping, and live price management",
          "Inventory availability toggling and immediate menu updates",
          "Kitchen order staging pipeline: incoming, preparing, out-for-delivery, fulfilled",
          "Branch-specific operational settings and fulfillment logs",
        ],
      },
      {
        title: "Superadmin Portal",
        role: "Platform Governance & Multi-Tenant Control",
        tech: ["Next.js", "React", "Tailwind CSS"],
        responsibilities: [
          "Tenant onboarding, branch verification, activation, and suspension",
          "Superadmin credential governance and delegation across restaurant operators",
          "Platform-level revenue aggregation and volume metrics",
          "System broadcast notifications and platform parameter management",
        ],
      },
      {
        title: "Backend API & Services",
        role: "Data Layer & Secure Integrations",
        tech: ["Node.js", "REST APIs", "MongoDB", "Mongoose", "NextAuth", "Cloudinary"],
        responsibilities: [
          "REST endpoints with JWT/NextAuth session validation",
          "Mongoose document schemas enforcing tenant boundaries",
          "Razorpay webhook verification and settlement reconciliation",
          "Cloudinary CDN image pipeline for dish assets and media storage",
        ],
      },
    ],
    problem:
      "Standard food ordering workflows often force small and mid-sized food establishments into monolithic third-party aggregators that take prohibitive commissions and offer no white-label tenant autonomy. Alternatively, single-tenant bespoke systems incur immense maintenance overhead. There was a clear need for a clean, modular multi-tenant architecture that isolates customer storefronts, kitchen fulfillment boards, and administrative governance under unified data structures.",
    solution:
      "Pet Protocols solves this by separating concerns into three distinct interface modules supported by a centralized API core. Customers get a fast, mobile-friendly PWA experience with instant cart updates and secure Razorpay payment processing. Restaurant managers get an unencumbered order queue and menu control dashboard. Platform operators maintain superadmin authority over restaurant tenants, billing records, and system health.",
    keyFeatures: [
      {
        title: "Customer Storefront Experience",
        description: "Frictionless ordering flow designed for desktop browsers and mobile web viewports.",
        items: [
          "Category-indexed dish catalog with instant live search filtering",
          "Persistent local-first cart state synchronized across browser tabs using Zustand",
          "Saved delivery addresses with validation and customer profile management",
          "Interactive order tracking from kitchen acknowledgment to delivery handoff",
        ],
      },
      {
        title: "Restaurant Operator Dashboard",
        description: "High-density operational console for kitchen staff and branch managers.",
        items: [
          "CRUD controls for dishes, pricing tiers, modifier items, and Cloudinary image assets",
          "One-click availability toggling for out-of-stock items to prevent invalid orders",
          "Order status pipeline allowing staff to transition orders through distinct phases",
          "Daily order histories and branch performance summaries",
        ],
      },
      {
        title: "Superadmin Multi-Tenant Governance",
        description: "Unified command center for platform administrators.",
        items: [
          "Complete visibility into registered restaurant entities and onboarding status",
          "Instant activation and kill-switch deactivation for non-compliant tenants",
          "Role-based privilege granting for secondary restaurant administrative personnel",
          "Global order count, revenue aggregates, and notification broadcasting",
        ],
      },
      {
        title: "PWA / Android TWA Deployment",
        description: "Mobile-first distribution pathway for frictionless app install.",
        items: [
          "Web App Manifest and Service Worker caching for offline app shell load",
          "Android Trusted Web Activity (TWA) compliance for native packaging capability",
          "Responsive layouts tuned for single-thumb touch interactions",
        ],
      },
    ],
    technicalDecisions: [
      {
        decision: "Why Multi-Tenant Architecture?",
        rationale:
          "Each restaurant operates within its own tenant context. Isolating menus, category items, inventory availability, and kitchen fulfillment stages prevents cross-tenant data bleed while sharing unified database models.",
        outcome:
          "Clean tenant partitioning at the Mongoose query boundary, allowing single-codebase scaling across dozens of partner cloud kitchens.",
      },
      {
        decision: "Why Separate Admin Systems (Kitchen vs Superadmin)?",
        rationale:
          "Kitchen staff require high-velocity, real-time fulfillment consoles (incoming, preparing, dispatch), whereas platform operators require tenant onboarding, commission auditing, and account governance.",
        outcome:
          "Role-based privilege separation enforced at both route middleware and API layers, keeping customer and kitchen codebases decoupled.",
      },
      {
        decision: "Why Razorpay with Cryptographic Verification?",
        rationale:
          "Payment gateway handoffs require robust server validation. Client-reported success states cannot be trusted for financial transactions.",
        outcome:
          "Order creation initializes on the server; Razorpay webhook and callback handlers verify HMAC-SHA256 signatures before transitioning order documents to 'Paid'.",
      },
      {
        decision: "Why Zustand for Client Cart Management?",
        rationale:
          "Redux introduces heavy boilerplate, while React Context triggers full subtree re-renders whenever quantity counters or add-ons toggle.",
        outcome:
          "Atomic state mutations, instant UI feedback, and automatic localStorage synchronization with minimal bundle footprint.",
      },
    ],
    challenges: [
      {
        challenge: "Cart State Synchronization Across Navigation",
        resolution:
          "Integrated Zustand store with local storage persistence middleware, ensuring items remain retained during page transitions, route reloads, and authentication flows.",
      },
      {
        challenge: "Handling Rapid Menu Availability Toggles",
        resolution:
          "Engineered optimistic UI updates backed by localized cache invalidation, ensuring customer views reflect real-time 86'd items without requiring full-page reloads.",
      },
    ],
    learnings: [
      "Designing multi-role applications requires clear permission boundaries at the schema, API middleware, and presentation layers.",
      "Reliable checkout systems depend on strict cryptographic verification on the server rather than trusting client-reported states.",
      "PWA and TWA standards require careful service worker cache lifecycle management to avoid serving stale API responses.",
    ],
  },

  "tuition-management": {
    slug: "tuition-management",
    title: "Multi-Tenant Tuition & Coaching Management System",
    badge: "Enterprise Educational SaaS",
    role: "Backend & Systems Architect / Full-Stack Developer",
    timeline: "2024",
    summary:
      "A production-oriented multi-tenant SaaS platform built for educational institutions and coaching academies, featuring strict PostgreSQL tenant isolation, Zod request validation, settled-payment revenue tracking, and live A4 printable invoice generation.",
    positioning:
      "A multi-tenant SaaS platform for coaching centers and educational institutions, engineered with transactional PostgreSQL integrity, strict tenant data isolation, and comprehensive student lifecycle tracking.",
    githubUrl: "https://github.com/gh-raunil/Coaching-management",
    liveUrl: undefined, // Strict rule: No live deployment URL exists, do NOT invent one
    technologies: [
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "REST API",
      "JWT",
      "bcryptjs",
      "Zod",
      "Next.js 14",
      "React",
      "Tailwind CSS",
      "Recharts",
    ],
    architectureLayers: [
      {
        title: "Backend API Engine",
        role: "Core Business Logic & Multi-Tenant Enforcement",
        tech: ["Express.js", "TypeScript", "PostgreSQL", "JWT", "bcryptjs", "Zod"],
        responsibilities: [
          "Tenant isolation middleware appending tenant identifiers to all database queries",
          "ACID-compliant PostgreSQL transaction blocks for invoice creation and payment settlement",
          "Role-based access control (Superadmin vs Coaching Admin vs Branch Staff)",
          "Zod schema validation on all incoming payload bodies and query parameters",
          "Protection against cross-tenant data leakage and suspended-tenant API access",
        ],
      },
      {
        title: "Superadmin Administrative Frontend",
        role: "Global Governance & SaaS Tenant Management",
        tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Recharts"],
        responsibilities: [
          "Coaching academy tenant onboarding and credential provisioning",
          "Branch license allocation and subscription lifecycle control",
          "Platform-wide activity monitoring and suspended-tenant containment",
          "Global system diagnostics and administrative audit trails",
        ],
      },
      {
        title: "Coaching Academy Admin Portal",
        role: "Institutional Operations, Billing & Academic Administration",
        tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Recharts"],
        responsibilities: [
          "Student enrollment, profile management, and guardian contact registry",
          "Course catalog setup, batch scheduling, and teacher assignments",
          "Fee invoice generation, installment tracking, and payment ledger updates",
          "Real-time settled revenue reporting and payment collection analytics",
          "Live print-ready A4 receipt generation with institutional letterhead branding",
        ],
      },
    ],
    problem:
      "Most tuition and coaching academies rely on fragmented spreadsheets, generic unspecialized accounting tools, or insecure single-database software that fails to separate operational branches. Multi-branch institutions frequently experience invoice discrepancies, untracked payment defaults, and data mixing across academic branches. Furthermore, off-the-shelf billing tools report generated invoices as 'revenue', distorting true cash flow.",
    solution:
      "This system delivers a robust multi-tenant architecture where every coaching branch or institution is securely isolated at the data query boundary. Invoices are linked to course batches, and revenue analytics are strictly calculated from verified settled payments rather than uncollected invoices. Coaching staff can generate standardized, print-ready A4 receipts on demand, while superadministrators hold complete visibility over platform tenants.",
    keyFeatures: [
      {
        title: "Guaranteed Multi-Tenant Data Isolation",
        description: "Hardened security layer preventing cross-tenant information bleed.",
        items: [
          "Mandatory tenant ID injection verified across Express routing middleware",
          "Database query constraints guaranteeing that no tenant can inspect sibling records",
          "Immediate API-level blocking for accounts flagged under suspended tenant organizations",
        ],
      },
      {
        title: "Settled-Payment Financial Tracking",
        description: "High-integrity revenue logic designed around verifiable cash settlement.",
        items: [
          "Distinct separation between Issued Invoices and Settled Payment transactions",
          "Revenue dashboards powered by Recharts reflect only settled ledger credits",
          "Installment payment support with remaining balance tracking per student",
        ],
      },
      {
        title: "A4 Printable Receipt Engine",
        description: "Browser-native document rendering for immediate academic billing handoff.",
        items: [
          "Print-CSS optimized layout rendering formal institutional receipts directly in browser",
          "Formatted with coaching academy branding, student enrollment number, and itemized course fee breakdown",
          "Eliminates reliance on expensive third-party PDF cloud compilation APIs",
        ],
      },
      {
        title: "Academic Lifecycle Administration",
        description: "End-to-end management of courses, cohorts, and student rosters.",
        items: [
          "Course catalog setup with fee structures and duration parameters",
          "Batch management linking students and instructional schedules",
          "Student roster tracking with emergency contacts and academic enrollment history",
        ],
      },
    ],
    technicalDecisions: [
      {
        decision: "Settled Revenue Calculation Over Accrual Invoicing",
        rationale:
          "In coaching and tuition operations, students frequently drop out or pay in installments. Calculating gross revenue from created invoices misrepresents institutional financial standing.",
        outcome:
          "Analytics aggregates sum verified payment receipts exclusively, providing trustworthy cash collection figures.",
      },
      {
        decision: "PostgreSQL Database Transactions for Payment Settlements",
        rationale:
          "Recording a fee payment requires updating the student's outstanding balance, writing a payment record, and incrementing invoice settled amounts simultaneously.",
        outcome:
          "Encapsulated in PostgreSQL BEGIN...COMMIT transaction blocks to eliminate race conditions and partial write corruption.",
      },
      {
        decision: "TypeScript + Zod Schema Validation Across All Endpoints",
        rationale:
          "Financial and academic records require strict data type enforcement to avoid negative payment amounts or malformed student records.",
        outcome:
          "Runtime validation halts invalid requests at the gateway before touching business logic or database queries.",
      },
    ],
    challenges: [
      {
        challenge: "Cross-Tenant Access Leakage Prevention",
        resolution:
          "Implemented automated repository middleware that enforces `WHERE tenant_id = $1` on every read and write query, combined with JWT tenant verification on every incoming request.",
      },
      {
        challenge: "Print-Exact A4 Invoice Layouts Across Browsers",
        resolution:
          "Authored specialized `@media print` CSS rules, page-break constraints, and pixel-exact header/footer formatting that guarantees uniform printing across Chrome, Edge, and Firefox without layout shifting.",
      },
    ],
    learnings: [
      "Relational database transactions are non-negotiable when dealing with multi-step ledger entries and institutional fee payments.",
      "Separating analytical revenue metrics from billing records provides real-world financial clarity that generic invoicing tools fail to deliver.",
      "Multi-tenant SaaS architectures must enforce security at the lowest data abstraction layer, rather than relying merely on UI route guards.",
    ],
  },
};
