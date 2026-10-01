
import CoachingApplicationForm from "@/components/coaching/CoachingApplicationForm";

export const metadata = {
  title: "Business Builders Coaching | Sociable Travels",
  description:
    "Apply for Sociable Travelers Business Builders, a three-month, one-on-one coaching program for licensed travel agents.",
};

export default function BusinessBuildersPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em]">
            Sociable Travelers
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Coaching Application
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Build your travel business with personalized coaching,
            practical guidance, and support designed to help you
            move forward.
          </p>
          {/* <p className="mt-6 text-lg font-semibold">
            3 Months · 10 One-on-One Sessions · $800
          </p> */}
        </div>
      </section>

      <CoachingApplicationForm />
    </main>
  );
}