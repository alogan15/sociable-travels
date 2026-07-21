import Container from "./Container";
import { kaushan } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 py-12">
      <Container>
        <div className="text-center">
<h3 className={`${kaushan.className} text-4xl`}>
  <span className="text-[var(--primary)]">Sociable</span>{" "}
  <span className="text-[var(--secondary)]">Travels</span>
</h3>

          <p className="mt-2 text-gray-500">
            Creating unforgettable travel experiences.
          </p>

          <p className="mt-8 text-sm text-gray-400">
            © {new Date().getFullYear()} Sociable Travels. All rights reserved.
          </p>
                  <p className="mt-3 text-xs text-gray-400">
            Designed & Developed by{" "}
            <a
                href="https://fromlondontoparis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition hover:text-[#0B3C5D]"
            >
                From London to Paris LLC
            </a>
        </p>
        </div>
      </Container>
    </footer>
  );
}