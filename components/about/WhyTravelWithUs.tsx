import {
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
  Plane,
} from "lucide-react";

const reasons = [
  "Personalized vacation planning tailored to your needs",
  "Expert guidance before, during, and after your trip",
  "Access to trusted travel partners and exclusive experiences",
  "Stress-free planning so you can focus on making memories",
];

export default function WhyTravelWithUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            Why Choose Sociable Travels
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            More Than a Trip—
            <span className="block text-cyan-500">
              We Create Experiences
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Planning a vacation should be exciting—not stressful. We take care
            of the details so you can focus on the adventure ahead. From your
            first conversation to your return home, we're committed to making
            your travel experience seamless and unforgettable.
          </p>

          <div className="mt-10 space-y-5">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="mt-1 text-cyan-500" size={22} />

                <p className="text-lg text-slate-700">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 inline-flex rounded-2xl bg-cyan-100 p-4 text-cyan-600">
              <ShieldCheck size={30} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-slate-900">
              Trusted Expertise
            </h3>

            <p className="leading-7 text-slate-600">
              Professional planning backed by trusted travel partners and
              reliable service.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 inline-flex rounded-2xl bg-pink-100 p-4 text-pink-600">
              <HeartHandshake size={30} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-slate-900">
              Personalized Care
            </h3>

            <p className="leading-7 text-slate-600">
              Every itinerary is customized to fit your interests, budget, and
              travel style.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl sm:col-span-2">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-100 p-4 text-amber-600">
              <Plane size={30} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-slate-900">
              End-to-End Support
            </h3>

            <p className="leading-7 text-slate-600">
              From your first inquiry until you're back home, Sociable Travels
              is here to answer questions, solve problems, and help make every
              journey unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}