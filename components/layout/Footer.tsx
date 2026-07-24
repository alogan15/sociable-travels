import Link from "next/link";
import {
  Globe,
  Camera,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { kaushan } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className={`${kaushan.className} text-4xl`}>
              <span className="text-[var(--primary)]">Sociable</span>{" "}
              <span className="text-[var(--secondary)]">Travels</span>
            </h2>

            <p className="mt-4 text-slate-300 leading-7">
              Dream it. Plan it. Experience it.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-3 transition hover:bg-[var(--primary)]"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-3 transition hover:bg-[var(--secondary)]"
              >
                <Camera size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-slate-300">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/destinations">Destinations</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Vacation Types */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Vacation Types</h3>

            <ul className="space-y-3 text-slate-300">
              <li>Cruises</li>
              <li>Group Travel</li>
              <li>Family Vacations</li>
              <li>Romantic Getaways</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--primary)]" />
                  Sociabletravels34@gmail.com
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--secondary)]" />
                (832)543-6351
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[var(--primary)]" />
                Houston, Tx
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Sociable Travels. All rights reserved.
          </p>

          <p className="mt-2">
            Designed & Developed by{" "}
            <span className="font-medium text-white">
              From London to Paris LLC
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}