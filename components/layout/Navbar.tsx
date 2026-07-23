"use client";

import Link from "next/link";
import Logo from "./Logo";
import Button from "../ui/Button";
import Container from "./Container";
import { ChevronDown } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

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

export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-20 lg:h-24 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium transition hover:text-[#0B3C5D]"
              >
                {link.name}
              </Link>
            ))}
            <div className="group relative">
            <button className="flex items-center gap-1 font-medium transition hover:text-[var(--primary)]">
              More
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="absolute right-0 mt-2 hidden w-48 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl group-hover:block">
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block rounded-lg px-4 py-2 transition hover:bg-slate-100"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
        <button
  onClick={() => {
    console.log("clicked");
    setMobileOpen(true);
  }}
  aria-label="Open menu"
  className="rounded-lg p-2 hover:bg-slate-100"
>
  <Menu className="h-7 w-7" />
</button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="rounded-lg p-2 transition hover:bg-slate-100"
            >
              <Menu className="h-7 w-7 text-slate-800" />
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      </header>
  );
}