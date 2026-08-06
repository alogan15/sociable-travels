import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Shirt,
  Briefcase,
  Coffee,
  Plane,
} from "lucide-react";

const collections = [
  {
    title: "Travel Apparel",
    description:
      "Comfortable shirts, hoodies, and everyday wear inspired by adventure.",
    icon: Shirt,
  },
  {
    title: "Accessories",
    description:
      "Hats, tote bags, passport holders, and luggage tags for every journey.",
    icon: Briefcase,
  },
  {
    title: "Drinkware",
    description:
      "Travel mugs, tumblers, and bottles made for life on the go.",
    icon: Coffee,
  },
  {
    title: "Travel Essentials",
    description:
      "Everything you need to travel smarter and in style.",
    icon: Plane,
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Explore"
          title="Featured Collections"
          description="Designed for travelers who love exploring the world while representing the Sociable Travels community."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((collection) => {
            const Icon = collection.icon;

            return (
              <div
                key={collection.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#39D5E8]/20 to-[#F54284]/20">
                  <Icon
                    size={30}
                    className="text-[var(--primary)]"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {collection.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {collection.description}
                </p>

                <div className="mt-8">
                  <span className="font-medium text-[var(--primary)] transition group-hover:translate-x-1 inline-block">
                    Coming Soon →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}