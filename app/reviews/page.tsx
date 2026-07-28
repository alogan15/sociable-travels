import ReviewsHero from "@/components/reviews/ReviewsHero";
import ReviewsGrid from "@/components/reviews/ReviewsGrid";
import WhyClientsLoveUs from "@/components/reviews/WhyClientsLoveUs";
import CTA from "@/components/cta/CTA";

export default function ReviewsPage() {
  return (
    <>
      <ReviewsHero />

      <ReviewsGrid />

      <WhyClientsLoveUs />

      <CTA
        eyebrow="Your Story Starts Here"
        title="Ready to Create Your Own Travel Story?"
        description="Join travelers who have trusted Sociable Travels to plan unforgettable vacations around the world."
       
      />
    </>
  );
}