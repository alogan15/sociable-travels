import { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  feature: Feature;
};

export default function FeatureCard({ feature }: Props) {
  const Icon = feature.icon;

  return (
    <article className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6 inline-flex rounded-2xl bg-[var(--secondary)]/10 p-4">
        <Icon
          className="h-8 w-8 text-[var(--primary)]"
          strokeWidth={2}
        />
      </div>

      <h3 className="mb-3 text-2xl font-semibold text-slate-900">
        {feature.title}
      </h3>

      <p className="leading-7 text-slate-600">
        {feature.description}
      </p>
    </article>
  );
}