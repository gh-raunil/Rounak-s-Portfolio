import type { Metadata } from "next";
import ContactView from "@/components/sections/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Direct contact channels, message composition, and professional networking links for Rounak Kumar.",
};

export default function ContactPage() {
  return <ContactView />;
}
