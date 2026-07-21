import Container from "../layout/Container";
import Button from "../ui/Button";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/hero/travel-hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <Container>
        <div className="relative z-10 max-w-3xl text-white">

          <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
            Dream It. Plan It. Experience It.
          </p>

          <h1 className="mb-6 text-6xl font-semibold leading-tight">
            {site.tagline}
          </h1>

          <p className="mb-10 text-xl text-gray-200">
            {site.description}
          </p>

          <div className="flex gap-4">
            <Button href="/contact">
              {site.primaryButton.text}
            </Button>

            <Button
              href="/services"
              variant="secondary"
            >
              {site.secondaryButton.text}
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}