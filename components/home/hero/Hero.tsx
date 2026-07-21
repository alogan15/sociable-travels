import Container from "../../layout/Container";
import HeroContent from "./HeroContent";
import HeroTrustBar from "./HeroTrustBar";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/travel.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/20" />

      {/* Content Container */}
      <Container>
        <div className="relative z-10 flex min-h-screen items-center py-12 lg:py-16">
            {<div className="relative z-10 flex items-center">
        <HeroContent />
        </div>}
        </div>
      </Container>
    </section>
  );
}