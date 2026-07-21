import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo/sociable-logo2.png"
        alt="Sociable Travels"
        width={180}
        height={180}
        priority
        className="h-20 w-auto md:h-28"
      />
    </Link>
  );
}