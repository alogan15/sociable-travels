import Container from "../layout/Container";

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
        <div className="relative z-10 flex h-screen items-center">
          {/* Hero content goes here in Commit 2 */}
        </div>
      </Container>
    </section>
  );
}