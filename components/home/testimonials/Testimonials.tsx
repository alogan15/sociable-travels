import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "./TestimonialsCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Travelers Are Saying"
          description="Real experiences from travelers who trusted Sociable Travels to plan unforgettable vacations."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}