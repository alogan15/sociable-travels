import Button from "@/components/ui/Button";

type HeroButton = {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  image: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
};

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  primaryButton,
  secondaryButton,
}: PageHeroProps) {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white">
        {/* Eyebrow */}
        <span className="mb-4 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
          {eyebrow}
        </span>

        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          {title}

          {highlight && (
            <span className="block text-[#39D5E8]">
              {highlight}
            </span>
          )}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
          {description}
        </p>

        {/* Buttons */}
        {(primaryButton || secondaryButton) && (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {primaryButton && (
              <Button href={primaryButton.href}>
                {primaryButton.text}
              </Button>
            )}

            {secondaryButton && (
              <Button
                href={secondaryButton.href}
                variant={secondaryButton.variant ?? "secondary"}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}