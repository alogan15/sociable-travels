import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "./services-data";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl">
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
        <Icon size={32} />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-semibold text-slate-900">
        {service.title}
      </h3>

      {/* Description */}
      <p className="flex-grow leading-7 text-slate-600">
        {service.description}
      </p>

      {/* CTA */}
      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600 transition-colors duration-300 group-hover:text-cyan-700"
      >
        Learn More
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}