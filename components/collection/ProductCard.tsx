import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--primary)] shadow">
          Coming Soon
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          {name}
        </h3>

        <p className="mt-2 text-lg font-bold text-[var(--secondary)]">
          {price}
        </p>
      </div>
    </div>
  );
}
