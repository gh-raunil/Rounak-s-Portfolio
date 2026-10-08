import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/layout/ThemeScript";
import AppShell from "@/components/layout/AppShell";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0D10" },
    { media: "(prefers-color-scheme: light)", color: "#F6F6F3" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rounak-kumar.dev"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Full-Stack Developer building modern web applications, responsive interfaces, robust REST APIs, and multi-tenant systems. BCA student at VIT Vellore.",
  keywords: [
    "Rounak Kumar",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "VIT Vellore",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rounak-kumar.dev",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description:
      "Full-Stack Developer building modern web applications, responsive interfaces, robust REST APIs, and multi-tenant systems.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.portraitUrl,
        width: 1200,
        height: 675,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description:
      "Full-Stack Developer building modern web applications, responsive interfaces, robust REST APIs, and multi-tenant systems.",
    images: [siteConfig.portraitUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased font-sans`}
    >
      <head>
        <ThemeScript />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
