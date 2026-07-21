import DestinationCard from "./DestinationCard";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Popular Destinations
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Explore Your Next Adventure
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            From tropical beaches to unforgettable cruises, discover some of
            our most-loved travel experiences.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
}