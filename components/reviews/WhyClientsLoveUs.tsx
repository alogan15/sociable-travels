import SectionHeader from "@/components/ui/SectionHeader";
import {
  HeartHandshake,
  Plane,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description:
      "Every itinerary is thoughtfully designed around your travel style, interests, and budget. No two vacations are ever the same.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Guidance",
    description:
      "From the first consultation until you're safely back home, Sociable Travels is with you every step of the journey.",
  },
  {
    icon: Plane,
    title: "Memorable Experiences",
    description:
      "We believe the best vacations aren't measured by miles traveled—but by the memories you bring home.",
  },
];

export default function WhyClientsLoveUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Travelers Return"
          title="The Sociable Travels Difference"
          description="Great vacations don't happen by accident. They're built through thoughtful planning, trusted guidance, and a genuine commitment to every traveler."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-100 p-4 text-cyan-600">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                  {reason.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}