import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function CollectionHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-pink-50 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              New Collection
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              The{" "}
              <span className="text-[var(--primary)]">
                Sociable
              </span>{" "}
              Collection
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Wear the journey. Discover travel-inspired apparel,
              accessories, and essentials created for explorers,
              adventurers, and the Sociable Travels community.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#products">
                Shop the Collection
              </Button>

              <Button
                href="/ambassador"
                variant="secondary"
              >
                Become a Brand Ambassador
              </Button>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <Image
              src="/images/collection/hero.jpg"
              alt="The Sociable Collection"
              width={700}
              height={700}
              className="rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}