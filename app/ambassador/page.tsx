import type { Metadata } from "next";

import AmbassadorHero from "@/components/ambassador/AmbassadorHero";
import AmbassadorStory from "@/components/ambassador/AmbassadorStory";
import AmbassadorBenefits from "@/components/ambassador/AmbassadorBenefits";
import AmbassadorRequirements from "@/components/ambassador/AmbassadorRequirements";
import AmbassadorSteps from "@/components/ambassador/AmbassadorSteps";
import AmbassadorGallery from "@/components/ambassador/AmbassadorGallery";
import AmbassadorForm from "@/components/ambassador/AmbassadorForm";
import AmbassadorFAQ from "@/components/ambassador/AmbassadorFAQ";
import AmbassadorCTA from "@/components/ambassador/AmbassadorCTA";

export const metadata: Metadata = {
  title: "Brand Ambassador | Sociable Travels",
  description:
    "Join the Sociable Travels Brand Ambassador Program and inspire others to explore the world.",
};

export default function AmbassadorPage() {
  return (
    <>
      <AmbassadorHero />
      <AmbassadorStory />
      <AmbassadorBenefits />
      <AmbassadorRequirements />
      <AmbassadorSteps />
      <AmbassadorGallery />
      <AmbassadorForm />
      <AmbassadorFAQ />
      <AmbassadorCTA />
    </>
  );
}