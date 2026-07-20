interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-2 font-semibold text-[#D4AF37] uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
}