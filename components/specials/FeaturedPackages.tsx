import SectionHeader from "@/components/ui/SectionHeader";
import PackageCard from "./PackageCard";
import { travelPackages } from "./packages-data";

export default function FeaturedPackages() {
  return (
    <section id="packages" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Featured Packages"
          title="Vacation Deals You'll Love"
          description="Explore our handpicked travel packages designed to make your next vacation unforgettable. From tropical escapes to European adventures, there's something for every traveler."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {travelPackages.map((packageItem) => (
            <PackageCard
              key={packageItem.id}
              packageItem={packageItem}
            />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">
        *Starting prices are provided as examples and may vary based on travel
        dates, availability, occupancy, promotions, and supplier pricing. Contact
        Sociable Travels for a personalized quote.
        </p>
      </div>
    </section>
  );
}