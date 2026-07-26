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

  return (
    <div className="flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1">
      {/* Step Number */}
    <span className="mb-8 text-6xl font-bold text-slate-300 lg:text-7xl">
            {step.number}
      </span>

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