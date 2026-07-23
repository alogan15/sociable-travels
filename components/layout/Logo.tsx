import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo/sociable-logo2.png"
        alt="Sociable Travels"
        width={80}
        height={84}
        className="object-contain"
      />
    </Link>
  );
}