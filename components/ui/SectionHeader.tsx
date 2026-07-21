type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 max-w-2xl ${
        centered ? "mx-auto text-center" : "text-left"
      }`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}