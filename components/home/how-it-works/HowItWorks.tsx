import SectionHeader from "@/components/ui/SectionHeader";
import { steps } from "@/data/howItWorks";
import StepCard from "./StepCard";

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="Planning Your Dream Vacation Is Easy"
          description="From your first conversation to your return home, Sociable Travels handles every detail so you can simply relax and enjoy the journey."
        />

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              step={step}
            />
          ))}
        </div>
      </div>
    </section>
  );
}