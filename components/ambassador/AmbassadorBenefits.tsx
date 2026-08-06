import {
  Globe2,
  Gift,
  Camera,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Globe2,
    title: "Exclusive Travel Opportunities",
    description:
      "Receive access to special promotions, discounted trips, and unique travel experiences available only to our ambassador community.",
  },
  {
    icon: Gift,
    title: "Rewards & Merchandise",
    description:
      "Earn exclusive Sociable Travels apparel, accessories, giveaways, and recognition as you grow within the program.",
  },
  {
    icon: Camera,
    title: "Grow Your Personal Brand",
    description:
      "Share your travel adventures, build your audience, and collaborate with a brand that celebrates authentic storytelling.",
  },
  {
    icon: BadgeCheck,
    title: "Be Part of Something Bigger",
    description:
      "Join a community of explorers who inspire others, create lasting memories, and represent the Sociable Travels mission.",
  },
];

export default function AmbassadorBenefits() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#39D5E8]/15 px-4 py-2 text-sm font-semibold text-[#39D5E8]">
            Ambassador Benefits
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            What's In It
            <span className="text-[#F54284]"> For You?</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Being a Sociable Travels Ambassador is about more than representing
            a brand. It's about joining a community, creating unforgettable
            experiences, and being rewarded for sharing your passion for travel.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#39D5E8] to-[#F54284] text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}