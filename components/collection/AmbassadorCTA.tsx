import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function AmbassadorCTA() {
  return (
    <section className="bg-gradient-to-r from-[#39D5E8] via-[#18B8F2] to-[#F54284] py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Join Our Community
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Become a Sociable Travels
            <br />
            Brand Ambassador
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Love exploring new destinations? Enjoy sharing your travel
            experiences? We're looking for passionate travelers to represent
            the Sociable Travels brand and inspire others to see the world.
          </p>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">
                Exclusive Perks
              </h3>

              <p className="mt-3 text-white/80">
                Early access to merchandise, travel opportunities,
                and exclusive community events.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">
                Inspire Others
              </h3>

              <p className="mt-3 text-white/80">
                Share your adventures and help others discover
                unforgettable travel experiences.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">
                Grow With Us
              </h3>

              <p className="mt-3 text-white/80">
                Become part of a growing travel community that
                celebrates exploration and connection.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button href="/brand-ambassador" variant="secondary">
              Apply to Become an Ambassador
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}