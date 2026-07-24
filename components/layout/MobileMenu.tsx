"use client";

import Link from "next/link";
import {
  X,
  House,
  MapPinned,
  BriefcaseBusiness,
  Star,
  Mail,
  User,
  ImageIcon,
  CircleHelp,
  Plane,
} from "lucide-react";import Button from "../ui/Button";
import { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";


type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { name: "Home", href: "/", icon: House },
  { name: "Destinations", href: "/destinations", icon: MapPinned },
  { name: "Services", href: "/services", icon: BriefcaseBusiness },
  { name: "Reviews", href: "/reviews", icon: Star },
  { name: "Contact", href: "/contact", icon: Mail },
];

const moreLinks = [
  { name: "About", href: "/about", icon: User },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "FAQ", href: "/faq", icon: CircleHelp },
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
<div className="relative border-b border-[#F54284]/20 px-8 py-8">

  <button
    onClick={onClose}
    className="absolute right-6 top-6 text-[#F54284]"
  >
    <X className="h-8 w-8" />
  </button>

  <Image
    src="/images/logo/sociable-logo2.png"
    alt="Sociable Travels"
    width={175}
    height={85}
    className="mx-auto object-contain"
  />

  <p className="mt-5 text-center text-lg font-medium text-[#39D5E8]">
    Dream It. Plan It.
  </p>

  <p className="text-center text-lg font-medium text-[#F54284]">
    Experience It.
  </p>

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
            <div className="space-y-1">
  {links.map((link) => {
    const Icon = link.icon;
    const active = pathname === link.href;

    return (
      <Link
        key={link.name}
        href={link.href}
        onClick={onClose}
        className={`flex items-center gap-5 rounded-xl px-5 py-4 transition ${
          active
            ? "bg-[#F54284]/10"
            : "hover:bg-slate-100"
        }`}
      >
        <Icon
          className={`h-7 w-7 ${
            active
              ? "text-[#39D5E8]"
              : "text-[#F54284]"
          }`}
        />

        <span className="text-2xl font-semibold text-slate-800">
          {link.name}
        </span>
      </Link>
    );
  })}
</div>

<div className="my-6 border-t border-[#F54284]/25" />
          {/* <p className="mb-3 px-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            More
          </p> */}

          <div className="space-y-1">
  {moreLinks.map((link) => {
    const Icon = link.icon;

    return (
      <Link
        key={link.name}
        href={link.href}
        onClick={onClose}
        className="flex items-center gap-5 rounded-xl px-5 py-4 transition hover:bg-slate-100"
      >
        <Icon className="h-7 w-7 text-[#F54284]" />

        <span className="text-2xl font-semibold text-slate-800">
          {link.name}
        </span>
      </Link>
    );
  })}
</div>
<div className="mt-auto pt-8">
  <Button
    href="/contact"
    className="flex w-full items-center justify-center gap-3"
  >
    <Plane className="h-5 w-5" />
    Book Your Trip
  </Button>
</div>
        </nav>
      </aside>
    </>
  );
}