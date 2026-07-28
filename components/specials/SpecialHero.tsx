import Button from "@/components/ui/Button";

export default function SpecialsHero() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white">
        <span className="mb-4 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
          Limited-Time Travel Deals
        </span>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Specials &
          <span className="block text-[#39D5E8]">
            Vacation Packages
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
          Discover handpicked vacation packages, exclusive travel offers, and
          unforgettable experiences. Whether you're dreaming of a tropical
          escape, a luxury cruise, or a family adventure, we'll help you find
          the perfect getaway.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">
            Request a Quote
          </Button>

          <Button
            href="#packages"
            variant="secondary"
          >
            View Packages
          </Button>
        </div>
      </div>
    </section>
  );
}