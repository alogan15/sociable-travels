import Image from "next/image";
import Button from "@/components/ui/Button";
import { Star } from "lucide-react";
import { Destination } from "./destination-data";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-[#39D5E8]">
            {destination.location}
          </p>

          <h3 className="mt-1 text-2xl font-bold text-slate-900">
            {destination.name}
          </h3>

          <div className="mt-3 flex gap-1">
            {Array.from({ length: destination.rating }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        <p className="leading-7 text-slate-600">
          {destination.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {destination.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#39D5E8]/10 px-3 py-1 text-sm font-medium text-[#0B3C5D]"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button href="/contact" className="w-full">
          Plan This Trip
        </Button>
      </div>
    </article>
  );
}