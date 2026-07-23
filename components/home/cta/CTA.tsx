import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <span className="mb-4 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
          Let's Start Planning
        </span>

        <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          Ready to Plan Your Next Adventure?
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
          Whether you're dreaming of a relaxing beach vacation, an exciting
          cruise, or a memorable group getaway, Sociable Travels is here to
          handle every detail so you can focus on making memories.
        </p>

        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[var(--primary)] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          Start Planning Today

          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}