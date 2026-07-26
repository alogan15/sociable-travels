import DestinationHero from "@/components/home/destinations/DestinationHero";
import DestinationGrid from "@/components/home/destinations/DestinationGrid";
import DestinationFilters from "@/components/home/destinations/DestinationFilters";
import CTA from "@/components/home/cta/CTA";


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