import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <span className="text-2xl font-bold text-[#0B3C5D]">
        Sociable Travels
      </span>
    </Link>
  );
}