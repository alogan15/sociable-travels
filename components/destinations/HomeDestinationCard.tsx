import Image from "next/image";

interface HomeDestinationCardProps {
  destination: {
    name: string;
    image: string;
    description: string;
  };
}

export default function HomeDestinationCard({
  destination,
}: HomeDestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-bold text-slate-900">
          {destination.name}
        </h3>

        <p className="leading-7 text-slate-600">
          {destination.description}
        </p>
      </div>
    </article>
  );
}