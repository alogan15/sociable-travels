import Container from "../../layout/Container";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/20" />

      {/* Content Container */}
      <Container>
        <div className="relative z-10 flex h-screen items-center pt-8 lg:pt-12">
          {<div className="relative z-10 flex h-screen items-center">
        <HeroContent />
        </div>}
        </div>
      </Container>
    </section>
  );
}