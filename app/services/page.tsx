import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import WhyBookWithUs from "@/components/services/WhyBookWithUs";
import CTA from "@/components/cta/CTA";



export const metadata = {
  title: "Services | Sociable Travels",
  description:
    "Discover the travel planning services offered by Sociable Travels, from vacation packages and cruises to romantic getaways and group travel.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <ServicesGrid />

      <WhyBookWithUs />

      <CTA
        eyebrow="Plan Your Next Getaway"
        title="Ready to Plan Your Next Adventure?"
        description="Whether you're dreaming of a tropical escape, an unforgettable cruise, a romantic getaway, or a fun-filled family vacation, Sociable Travels is here to make every detail effortless. Let's start planning your perfect getaway today."
        buttonText="Start Planning Today"
        buttonHref="/contact"
      />
    </>
  );
}