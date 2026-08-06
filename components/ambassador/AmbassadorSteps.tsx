import {
  FileText,
  SearchCheck,
  Plane,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Complete our online ambassador application and tell us about yourself, your travel interests, and why you'd love to represent Sociable Travels.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Review",
    description:
      "Our team carefully reviews every application to find passionate travelers who align with our mission and values.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Welcome Aboard",
    description:
      "If selected, you'll receive your welcome email, ambassador resources, and exclusive community perks.",
    icon: Plane,
  },
  {
    number: "04",
    title: "Start Inspiring",
    description:
      "Travel, create amazing memories, share your adventures, and inspire others to explore the world with Sociable Travels.",
    icon: Sparkles,
  },
];

export default function AmbassadorSteps() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#39D5E8]">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Your Ambassador Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Becoming a Sociable Travels Ambassador is simple. Here's what you
            can expect from application to your first adventure.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="absolute right-6 top-6 text-5xl font-black text-slate-100">
                  {step.number}
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#39D5E8] to-[#F54284] text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}