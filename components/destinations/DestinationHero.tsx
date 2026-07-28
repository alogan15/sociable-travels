import PageHero from "@/components/ui/PageHero";

export default function DestinationHero() {
  return (
    <PageHero
      eyebrow="✈️ Explore the World with Confidence"
      title="Discover Your Next"
      highlight="Dream Destination"
      description="Whether you're dreaming of relaxing on a tropical beach, sailing on a luxury cruise, or exploring vibrant cities, Sociable Travels helps you plan unforgettable experiences tailored just for you."
      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
      primaryButton={{
        text: "Start Planning",
        href: "/contact",
      }}
      secondaryButton={{
        text: "Browse Destinations",
        href: "#destinations",
        variant: "secondary",
      }}
    />
  );
}