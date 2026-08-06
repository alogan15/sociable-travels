import Button from "@/components/ui/Button";

export default function BrandAmbassadorHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#12213D] to-[#0B3C5D]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-24 text-center lg:flex-row lg:justify-between lg:text-left">

        {/* Left */}
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-[#F54284]/15 px-4 py-2 text-sm font-semibold text-[#F54284]">
            Join Our Community
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            Become a{" "}
            <span className="text-[#39D5E8]">
              Sociable Travels
            </span>{" "}
            Brand Ambassador
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Inspire others to explore the world, share your travel
            experiences, represent our community, and unlock exclusive
            ambassador perks along the way.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#apply">
              Apply Today
            </Button>

            <Button
              href="/collection"
              variant="secondary"
            >
              Shop The Collection
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>🌎 Travel Community</span>
            <span>✈️ Exclusive Rewards</span>
            <span>🤝 VIP Opportunities</span>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-lg">
          <img
            src="/images/branding/ambassador-hero.jpg"
            alt="Sociable Travels Brand Ambassador"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}