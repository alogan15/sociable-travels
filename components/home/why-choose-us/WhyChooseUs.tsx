import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "./FeatureCard";
import { whyChooseUs } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Travel Planning Made Simple"
          description="From your first conversation to your return flight home, Sociable Travels is here to make every step effortless."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {whyChooseUs.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}