# Rounak Kumar — Full-Stack Developer Portfolio

Personal portfolio and technical showcase of **Rounak Kumar**, Full-Stack Developer and BCA student at Vellore Institute of Technology (VIT Vellore).

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## Technical Overview

- **Core Stack**: Next.js 16.3 (Turbopack, Server Components), React 19, TypeScript 5, Tailwind CSS v4.
- **Architecture**:
  - Persistent desktop sidebar navigation with active route indicators.
  - Accessible mobile drawer with backdrop blur, body scroll locking, and Escape key dismissal.
  - Zero-FOUC theme engine supporting Dark & Light modes with persistent `localStorage` synchronization.
  - Responsive layouts tailored across 320px to 1920px viewports without horizontal clipping.
  - Semantic HTML5, accessible focus outlines (`:focus-visible`), and `prefers-reduced-motion` compliance.

---

## Featured Project Showcases

### 1. Pet Protocols
- **Domain**: Multi-Tenant Food Ordering Platform.
- **Stack**: Next.js, React, Tailwind CSS, Node.js, REST APIs, MongoDB, Mongoose, Zustand, Razorpay, Cloudinary.
- **Highlights**:
  - Interactive **Product Walkthrough** with step-by-step UI previews (Discover → Select → Cart → Checkout → Order).
  - High-level service topology diagrams detailing storefront, Razorpay payment verification, and kitchen governance.
  - Server-side cryptographic HMAC-SHA256 signature verification.
  - Live deployment: [pet-protocols.vercel.app](https://pet-protocols.vercel.app/)

### 2. Multi-Tenant Tuition & Coaching Management System
- **Domain**: Enterprise Educational SaaS Platform.
- **Stack**: Express.js, TypeScript, PostgreSQL, Next.js 14, React, Tailwind CSS, JWT, bcryptjs, Zod, Recharts.
- **Highlights**:
  - Guaranteed multi-tenant data isolation with programmatic `WHERE tenant_id = $1` query scoping.
  - PostgreSQL `BEGIN ... COMMIT` ACID transaction blocks for invoice generation and fee settlement.
  - Settled revenue accounting separating realized cash receipts from accrual billing.
  - Browser-native A4 printable receipt engine.
  - Repository: [gh-raunil/Coaching-management](https://github.com/gh-raunil/Coaching-management)

---

## Project Structure

```text
├── app/
│   ├── layout.tsx                # Root layout with fonts, metadata, AppShell
│   ├── globals.css               # CSS variables (dark/light themes, animations)
│   ├── page.tsx                  # Home page (Hero, Selected Work, Focus, Experience, Education)
│   ├── about/                    # Architectural philosophy & academic track
│   ├── projects/                 # Project index & case studies
│   │   ├── pet-protocols/        # Pet Protocols case study & interactive walkthrough
│   │   └── tuition-management/   # Tuition Management system architecture
│   ├── experience/               # Work history (Cognify Digital intern track)
│   ├── skills/                   # Technical taxonomy & tooling (no vanity percentages)
│   ├── education/                # Academic credentials (VIT Vellore BCA, Class XII)
│   ├── resume/                   # Recruiter overview & official PDF viewer
│   ├── contact/                  # Direct channels & validated email composer
│   └── 404/                      # Dedicated not-found error route
├── components/
│   ├── layout/                   # Sidebar, MobileNav, AppShell, ThemeToggle, Footer
│   ├── projects/                 # ArchitectureDiagram, ProjectCard, PetProtocolsWalkthrough
│   ├── sections/                 # Modular home & contact view components
│   └── ui/                       # Badge, Button, Card, SectionHeader, Icons
├── data/                         # Strictly typed data sources (projects, skills, education)
└── public/                       # Portrait, resume PDF, and static SVG icons
```

---

## Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Create optimized production build
npm run build

# Start the production server
npm run start
```

---

## Contact & Connect

- **Portfolio**: [rounak-kumar.dev](https://rounak-kumar.dev)
- **GitHub**: [github.com/gh-raunil](https://github.com/gh-raunil)
- **LinkedIn**: [linkedin.com/in/rounak-sharma-9b8260319](https://www.linkedin.com/in/rounak-sharma-9b8260319/)
- **Instagram**: [instagram.com/ig_raunil](https://www.instagram.com/ig_raunil/)
- **Email**: [rounaksharma1221@gmail.com](mailto:rounaksharma1221@gmail.com)
