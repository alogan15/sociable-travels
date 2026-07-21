type Step = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

type StepCardProps = {
  step: Step;
};

export default function StepCard({ step }: StepCardProps) {
//   const iconMap: Record<string, string> = {
//     Plane: "✈️",
//     ClipboardList: "📋",
//     Palmtree: "🌴",
//   };

  return (
    <div className="flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1">
      {/* Step Number */}
    <span className="mb-12 text-6xl font-bold text-slate-200 lg:text-7xl">
            {step.number}
      </span>

      {/* Icon */}
      {/* <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
        {iconMap[step.icon] ?? "✈️"}
      </div> */}

      {/* Title */}
      <h3 className="mb-3 text-2xl font-semibold text-slate-900">
        {step.title}
      </h3>

      {/* Description */}
      <p className="max-w-xs leading-7 text-slate-600">
        {step.description}
      </p>
    </div>
  );
}