import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-2xl font-bold tracking-tight text-[#0B3C5D]">
        Sociable Travels
      </span>
    </Link>
  );
}