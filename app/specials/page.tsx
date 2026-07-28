import SpecialsHero from "@/components/specials/SpecialHero";
import FeaturedPackages from "@/components/specials/FeaturedPackages";
import WhyBookSpecials from "@/components/specials/WhyBookSpecials";
import CTA from "@/components/cta/CTA";

export const metadata = {
  title: "Specials & Packages | Sociable Travels",
  description:
    "Explore featured vacation packages, cruises, romantic getaways, family adventures, and exclusive travel specials from Sociable Travels.",
};

export default function SpecialsPage() {
  return (
    <>
      <SpecialsHero />

      <FeaturedPackages />

      <WhyBookSpecials />

      <CTA
        eyebrow="Exclusive Travel Deals"
        title="Found the Perfect Vacation?"
        description="Our featured packages are designed to make planning easy while helping you create unforgettable memories. Let us customize the perfect getaway for you."
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}