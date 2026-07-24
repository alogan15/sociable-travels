"use client";

import Link from "next/link";
import { X } from "lucide-react";
import Button from "../ui/Button";
import { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";


type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Services", href: "/services" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

const moreLinks = [
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {

  const pathname = usePathname();


  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

  console.log("MobileMenu open:", open);
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-72 flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
<div className="flex items-center justify-between border-b p-6">
  <Image
    src="/images/logo/sociable-logo2.png"
    alt="Sociable Travels"
    width={140}
    height={52}
    className="object-contain"
  />
</div>

          {/* <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button> */}

        {/* Main Links */}
          <nav className="flex flex-1 flex-col overflow-y-auto p-6">
            <div className="space-y-2">
            {/* {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
className="
block
rounded-xl
px-4
py-3
text-xl
font-semibold
text-white
transition-all
duration-200
hover:bg-white/10
hover:text-[#F54284]
"              >
                {link.name}
              </Link>
            ))} */}

{links.map((link) => {
  const isActive = pathname === link.href;

  return (
    <Link
      key={link.name}
      href={link.href}
      onClick={onClose}
      className={`
        flex items-center gap-3 rounded-xl px-4 py-3 text-xl font-semibold transition-all duration-200
        ${
          isActive
            ? "bg-white/10 text-[#39D5E8]"
            : "text-white hover:bg-white/10 hover:text-[#F54284]"
        }
      `}
    >
      <span
        className={`h-6 w-1 rounded-full ${
          isActive ? "bg-[#39D5E8]" : "bg-transparent"
        }`}
      />

      <span>{link.name}</span>
    </Link>
  );
})}
          </div>

          <div className="my-6 border-t" />

          {/* <p className="mb-3 px-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            More
          </p> */}

          <div className="space-y-2">
            {moreLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
className="
block
rounded-xl
px-4
py-3
text-xl
font-semibold
text-white
transition-all
duration-200
hover:bg-white/10
hover:text-[#F54284]
"                // className="block rounded-xl px-4 py-3 text-lg transition hover:bg-slate-100"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* <div className="mt-auto pt-8">
            <Button href="/contact">
              Book Your Trip
            </Button>
          </div> */}
        </nav>
      </aside>
    </>
  );
}