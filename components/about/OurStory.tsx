import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Personalized vacation planning",
  "Stress-free travel experiences",
  "Trusted guidance from start to finish",
  "Memories that last a lifetime",
];

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          Our Story
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Helping You Explore the World
          <span className="block text-cyan-500">
            One Journey at a Time
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          At Sociable Travels, we believe travel is more than simply reaching a
          destination—it's about creating unforgettable experiences, celebrating
          life's special moments, and making memories that stay with you long
          after you return home.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Every traveler is unique, which is why we take the time to understand
          your goals, interests, and vision before recommending the perfect
          getaway. Whether you're dreaming of a tropical escape, a luxury
          cruise, a family vacation, or an adventure abroad, we're here to make
          planning simple, exciting, and stress-free.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
            >
              <CheckCircle2
                size={24}
                className="flex-shrink-0 text-cyan-500"
              />

              <span className="font-medium text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}