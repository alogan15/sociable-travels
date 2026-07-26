import Button from "@/components/ui/Button";

export default function ServicesHero() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white">
        <span className="mb-4 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
          🌍 Personalized Travel Services
        </span>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Travel Planning
          <span className="block text-[#39D5E8]">
            Made Simple
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
          Whether you're planning a luxury cruise, an all-inclusive resort,
          a family vacation, or the honeymoon of your dreams, Sociable
          Travels handles every detail so you can simply relax and enjoy the
          journey.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">
            Start Planning
          </Button>

          <Button
            href="#services"
            variant="secondary"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}