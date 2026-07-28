import PageHero from "@/components/ui/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      eyebrow="Get In Touch"
      title="Let's Plan"
      highlight="Your Next Adventure"
      description="Have questions or ready to start planning? We'd love to hear from you. Reach out today and let's create a vacation you'll never forget."
      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
      primaryButton={{
        text: "Complete the Form",
        href: "#contact-form",
      }}
      secondaryButton={{
        text: "Contact Info",
        href: "#contact-info",
        variant: "secondary",
      }}
    />
  );
}