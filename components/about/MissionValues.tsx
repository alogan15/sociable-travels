import SectionHeader from "@/components/ui/SectionHeader";
import {
  Globe2,
  Handshake,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Globe2,
    title: "Personalized Service",
    description:
      "No two travelers are alike. Every itinerary is thoughtfully planned around your interests, budget, and travel goals.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "We work with reputable travel suppliers and partners to help deliver dependable, high-quality vacation experiences.",
  },
  {
    icon: Sparkles,
    title: "Memorable Experiences",
    description:
      "We believe travel is about creating moments you'll remember for years to come—not simply checking destinations off a list.",
  },
];

export default function MissionValues() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Mission & Values"
          title="What Guides Everything We Do"
          description="Every recommendation, itinerary, and vacation we plan is built around delivering exceptional travel experiences with care and attention to detail."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                  {value.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}