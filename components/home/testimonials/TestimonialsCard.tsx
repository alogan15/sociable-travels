type Testimonial = {
  name: string;
  location: string;
  rating: number;
  review: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Rating */}
      <div className="mb-6 flex text-2xl text-[var(--primary)]">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>

      {/* Review */}
      <p className="mb-8 text-lg leading-8 text-slate-600">
        "{testimonial.review}"
      </p>

      {/* Traveler */}
      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {testimonial.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {testimonial.location}
        </p>
      </div>
    </article>
  );
}