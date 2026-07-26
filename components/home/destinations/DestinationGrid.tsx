import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import DestinationCard from "./DestinationCard";
import { destinations } from "./destination-data";

export default function DestinationGrid() {
  return (
    <section id="destinations" className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Popular Destinations"
          title="Find Your Perfect Getaway"
          description="Whether you're looking for tropical beaches, vibrant cities, luxurious resorts, or unforgettable adventures, Sociable Travels is here to help you discover your next favorite destination."
        />

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {destinations.map((destination) => (
                    <DestinationCard
                    key={destination.id}
                    destination={destination}
                    />
                ))}
                </div>
        
      </Container>
    </section>
  );
}