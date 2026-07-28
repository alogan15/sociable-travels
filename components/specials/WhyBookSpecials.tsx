import SectionHeader from "@/components/ui/SectionHeader";
import {
  BadgeDollarSign,
  Sparkles,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: BadgeDollarSign,
    title: "Exclusive Value",
    description:
      "We carefully select vacation packages that combine exceptional experiences with outstanding value, helping you make the most of your travel budget.",
  },
  {
    icon: Sparkles,
    title: "Tailored Experiences",
    description:
      "Every traveler is unique. We can personalize featured packages with upgrades, excursions, and special touches to create your ideal vacation.",
  },
  {
    icon: Headset,
    title: "Support Every Step",
    description:
      "From planning and booking to the day you return home, we're here to answer questions and provide peace of mind throughout your journey.",
  },
];

export default function WhyBookSpecials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Book With Us"
          title="More Than a Vacation Package"
          description="Booking with Sociable Travels means receiving personalized service, trusted guidance, and a travel experience designed around you—not just another reservation."
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