import Button from "@/components/ui/Button";

type CTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTA({
  eyebrow = "Ready to Explore?",
  title = "Let's Plan Your Next Adventure",
  description = "Whether you're dreaming of a relaxing beach escape, an unforgettable cruise, or an adventure abroad, Sociable Travels is here to make your journey seamless from start to finish.",
  buttonText,
  buttonHref,
}: CTAProps) {
  return (
    <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-24">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
        <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
          {eyebrow}
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
          {description}
        </p>

        {buttonText && buttonHref && (
          <div className="mt-10">
            <Button href={buttonHref}>
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}