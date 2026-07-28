import Image from "next/image";
import Button from "@/components/ui/Button";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import type { TravelPackage } from "./packages-data";

type PackageCardProps = {
  packageItem: TravelPackage;
};

export default function PackageCard({ packageItem }: PackageCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={packageItem.image}
          alt={packageItem.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Badge */}
        <span className="absolute left-5 top-5 rounded-full bg-pink-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
          {packageItem.badge}
        </span>

            {/* Price */}
            <div className="absolute bottom-5 right-5 rounded-2xl bg-white px-4 py-3 text-right shadow-lg">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Starting At
            </p>

            <p className="text-3xl font-bold leading-none text-cyan-600">
                {packageItem.startingPrice}
            </p>

            <p className="mt-1 text-xs text-slate-500">
                per person*
            </p>
            </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-2xl font-bold text-slate-900">
          {packageItem.title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-slate-500">
          <MapPin size={18} />

          <span>{packageItem.location}</span>
        </div>

        <div className="mt-2 flex items-center gap-2 text-slate-500">
          <Clock size={18} />

          <span>{packageItem.duration}</span>
        </div>

        <p className="mt-5 leading-7 text-slate-600">
          {packageItem.description}
        </p>

        <div className="mt-8">
          <Button href="/contact">
            Request Quote
            <ArrowRight
              className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1"
              size={18}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}