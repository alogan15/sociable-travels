import Image from "next/image";
import Link from "next/link";

type Destination = {
  name: string;
  image: string;
  description: string;
};

type DestinationCardProps = {
  destination: Destination;
};

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <Link
      href="#"
      className="group relative block h-[420px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Background Image */}
      <Image
        src={destination.image}
        alt={destination.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="mb-2 text-3xl font-bold">
          {destination.name}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-white/90">
          {destination.description}
        </p>

        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-transform duration-300 group-hover:translate-x-1">
          Learn More
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}