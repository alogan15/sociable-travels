import DestinationHero from "@/components/destinations/DestinationHero";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import DestinationFilters from "@/components/destinations/DestinationFilters";
import CTA from "@/components/cta/CTA";


export default function DestinationsPage() {
  return (
    <main className="bg-white">
      <DestinationHero />
      <DestinationFilters />
      <DestinationGrid />
      <CTA />
    </main>
  );
}