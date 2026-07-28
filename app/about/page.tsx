import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/about/OurStory";
import MissionValues from "@/components/about/MissionValues";
import MeetAdvisor from "@/components/about/MeetAdvisor";
import WhyTravelWithUs from "@/components/about/WhyTravelWithUs";
import CTA from "@/components/cta/CTA";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Sociable Travels"
        title="Travel Experiences"
        highlight="Built Around You"
        description="At Sociable Travels, we believe every journey should be as unique as the traveler. Our mission is to make planning your dream vacation simple, personalized, and unforgettable."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
        primaryButton={{
          text: "Start Planning",
          href: "/contact",
        }}
        secondaryButton={{
          text: "Our Story",
          href: "#our-story",
          variant: "secondary",
        }}
      />

      <OurStory />

      <MissionValues />

      <WhyTravelWithUs />

      <MeetAdvisor />

      <CTA
        eyebrow="Travel Made Personal"
        title="Your Next Adventure Awaits"
        description="Whether you're dreaming of a tropical escape, a luxury cruise, or a once-in-a-lifetime adventure, Sociable Travels is here to make it happen."
      />
    </>
  );
}