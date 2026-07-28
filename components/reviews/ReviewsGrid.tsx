import SectionHeader from "@/components/ui/SectionHeader";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviews-data";

export default function ReviewsGrid() {
  return (
    <section
      id="reviews"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Traveler Stories"
          title="What Our Travelers Are Saying"
          description="Nothing makes us happier than helping travelers create unforgettable experiences. Here's what a few of our clients had to say after their adventures with Sociable Travels."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
              {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Every Journey Has a Story
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            These experiences represent what Sociable Travels strives to deliver
            for every client: thoughtful planning, personalized service, and
            unforgettable memories from the moment your trip begins until you
            return home.
          </p>

          <p className="mt-6 text-sm italic text-slate-500">
            Testimonials are shared with permission. Some reviews have been
            lightly edited for length and readability while preserving their
            original meaning.
          </p>
        </div>
      </div>
    </section>
  );
}