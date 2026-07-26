import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "./ServiceCard";
import { services } from "./services-data";

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything You Need for the Perfect Trip"
          description="From relaxing beach vacations to unforgettable cruises and customized group travel, Sociable Travels is here to make planning your next adventure effortless."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}