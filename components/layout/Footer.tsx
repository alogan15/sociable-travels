import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
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
                href="https://www.facebook.com/share/g/1DMPsqe1Ef/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-3 transition hover:bg-[var(--primary)]"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.instagram.com/sociable_travels/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-3 transition hover:bg-[var(--secondary)]"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-slate-300">
              <li><Link href="/" className="transition hover:text-[var(--primary)]">Home</Link></li>
              <li><Link href="/destinations" className="transition hover:text-[var(--primary)]">Destinations</Link></li>
              <li><Link href="/about" className="transition hover:text-[var(--primary)]">About</Link></li>
              <li><Link href="/contact" className="transition hover:text-[var(--primary)]">Contact</Link></li>
            </ul>
          </div>

          {/* Vacation Types */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Vacation Types</h3>

            <ul className="space-y-3 text-slate-300">
                <li>
                  <Link
                    href="/destinations?type=cruises"
                    className="transition hover:text-[var(--primary)]"
                  >
                    Cruises
                  </Link>
                </li>

                <li>
                  <Link
                    href="/destinations?type=group"
                    className="transition hover:text-[var(--primary)]"
                  >
                    Group Travel
                  </Link>
                </li>

                <li>
                  <Link
                    href="/destinations?type=family"
                    className="transition hover:text-[var(--primary)]"
                  >
                    Family Vacations
                  </Link>
                </li>

                <li>
                  <Link
                    href="/destinations?type=romantic"
                    className="transition hover:text-[var(--primary)]"
                  >
                    Romantic Getaways
                  </Link>
                </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--primary)]" />
                      <a
                        href="mailto:Sociabletravels34@gmail.com"
                        className="transition hover:text-[var(--primary)]"
                      >
                        Sociabletravels34@gmail.com
                      </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--secondary)]" />
                      <a
                        href="tel:+18325436351"
                        className="transition hover:text-[var(--secondary)]"
                      >
                        (832) 543-6351
                      </a>
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