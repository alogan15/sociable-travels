import {
  ShieldCheck,
  MapPinned,
  Headset,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: MapPinned,
    title: "Personalized Planning",
    description:
      "Every traveler is different. We take the time to understand your goals and create a vacation tailored specifically to you.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description:
      "From destination recommendations to travel logistics, we provide knowledgeable guidance every step of the way.",
  },
  {
    icon: Headset,
    title: "Stress-Free Support",
    description:
      "We handle the details so you can focus on making memories. If questions come up, we're only a call or message away.",
  },
];

export default function WhyBookWithUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Travel With Confidence"
          description="Planning your dream vacation should be exciting—not overwhelming. Sociable Travels is committed to making every step of your journey smooth, simple, and memorable."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}