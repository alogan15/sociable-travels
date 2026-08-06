import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Must be at least 18 years old.",
  "Passionate about travel and exploring new destinations.",
  "Maintain an active presence on at least one social media platform.",
  "Share authentic, positive travel experiences.",
  "Represent Sociable Travels with professionalism and integrity.",
  "Willing to engage with the Sociable Travels community.",
];

export default function AmbassadorRequirements() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#F54284]/15 px-4 py-2 text-sm font-semibold text-[#F54284]">
            Requirements
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Are You a Good Fit?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We're looking for enthusiastic travelers who love sharing
            experiences, inspiring others, and representing the Sociable
            Travels community with authenticity.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Requirements Card */}
          <div className="rounded-3xl bg-slate-50 p-10 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">
              Minimum Requirements
            </h3>

            <div className="mt-8 space-y-6">
              {requirements.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    className="mt-1 text-[#39D5E8]"
                    size={24}
                  />

                  <p className="leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Callout */}
          <div className="rounded-3xl bg-gradient-to-br from-[#0B3C5D] to-slate-900 p-10 text-white shadow-xl">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              What We Value
            </span>

            <h3 className="mt-6 text-3xl font-bold">
              Passion Over Popularity
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              You don't need thousands of followers to become a Sociable
              Travels Ambassador. We're looking for genuine storytellers,
              positive attitudes, and people who truly love discovering the
              world and encouraging others to do the same.
            </p>

            <div className="mt-10 rounded-2xl bg-white/10 p-6">
              <p className="text-lg font-semibold">
                Quality engagement matters more than follower count.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}