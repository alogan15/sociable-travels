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
  { name: "Specials", href: "/specials" },
  { name: "Services", href: "/services" },
  // { name: "Testimonials", href: "/reviews" },
  { name: "Contact", href: "/contact" },
  // { name: "About", href: "/about" },

];

const moreLinks = [
  { name: "Testimonials", href: "/reviews" },
  { name: "About", href: "/about" },
  // { name: "About", href: "/about" },
  // { name: "Gallery", href: "/gallery" },
  // { name: "FAQ", href: "/faq" },
];

export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-24 lg:h-24 items-center justify-between">
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
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`flex items-center gap-1 font-medium transition
                  ${
                    moreOpen
                      ? "text-[#F54284]"
                      : "hover:text-[#F54284]"
                  }`}              >
                More
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {moreOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="
                        block rounded-xl px-4 py-2
                        font-medium
                        transition-all duration-200
                        hover:bg-gradient-to-r
                        hover:from-[#39D5E8]/10
                        hover:to-[#F54284]/10
                        hover:text-[#F54284]
                      ">
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/contact">
              Book Your Trip
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              // onClick={() => setMobileOpen(true)}
              onClick={() => {
              console.log("Opening menu...");
              setMobileOpen(true);
            }}
              aria-label="Open menu"
              className="rounded-xl p-3 transition-all duration-300 hover:bg-[#39D5E8]/10 active:scale-95"
            >
              <Menu className="h-9 w-9 text-slate-800" />
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