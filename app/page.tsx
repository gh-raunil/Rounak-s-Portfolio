import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import ShortAbout from "@/components/sections/ShortAbout";
import TechnicalFocus from "@/components/sections/TechnicalFocus";
import ExperienceSummary from "@/components/sections/ExperienceSummary";
import EducationSummary from "@/components/sections/EducationSummary";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <Hero />
      <SelectedWork />
      <ShortAbout />
      <TechnicalFocus />
      <ExperienceSummary />
      <EducationSummary />
      <ContactCTA />
    </div>
  );
}
