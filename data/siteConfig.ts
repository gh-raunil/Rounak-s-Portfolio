export interface NavItem {
  num: string;
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  instagram: string;
  resumePdfUrl: string;
  portraitUrl: string;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Rounak Kumar",
  title: "Full-Stack Developer",
  tagline: "Building modern web applications from interface to backend.",
  bio: "Full-Stack Developer who builds modern web applications, responsive interfaces, reliable REST APIs, database architectures, and complete production software systems. Focused on clean code, system performance, and technical discipline.",
  email: "rounaksharma1221@gmail.com",
  phone: "+91 62023 77582",
  location: "Vellore / New Delhi, India",
  github: "https://github.com/gh-raunil",
  linkedin: "https://www.linkedin.com/in/rounak-sharma-9b8260319/",
  instagram: "https://www.instagram.com/ig_raunil/",
  resumePdfUrl: "/Rounak_Kumar_Resume.pdf",
  portraitUrl: "/portrait.png",
  navItems: [
    { num: "01", label: "Home", href: "/" },
    { num: "02", label: "About", href: "/about" },
    { num: "03", label: "Projects", href: "/projects" },
    { num: "04", label: "Experience", href: "/experience" },
    { num: "05", label: "Skills", href: "/skills" },
    { num: "06", label: "Education", href: "/education" },
    { num: "07", label: "Resume", href: "/resume" },
    { num: "08", label: "Contact", href: "/contact" },
  ],
};
