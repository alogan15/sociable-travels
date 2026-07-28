import PageHero from "@/components/ui/PageHero";

export default function ReviewsHero() {
  return (
    <PageHero
      eyebrow="Traveler Reviews"
      title="Real Stories"
      highlight="Real Memories"
      description="Nothing means more to us than helping travelers create unforgettable experiences. Here's what our clients have to say about working with Sociable Travels."
      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
      primaryButton={{
        text: "Plan Your Trip",
        href: "/contact",
      }}
      secondaryButton={{
        text: "Read Reviews",
        href: "#reviews",
        variant: "secondary",
      }}
    />
  );
}