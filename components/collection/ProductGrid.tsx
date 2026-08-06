import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Sociable Signature Tee",
    price: "$30",
    image: "/images/collection/product1.png",
  },
  {
    name: "Adventure Hoodie",
    price: "$55",
    image: "/images/collection/product2.png",
  },
  {
    name: "Explorer Hat",
    price: "$28",
    image: "/images/collection/product3.png",
  },
  {
    name: "Travel Tumbler",
    price: "$24",
    image: "/images/collection/product4.png",
  },
  {
    name: "Beach Tote",
    price: "$35",
    image: "/images/collection/product5.png",
  },
  {
    name: "Passport Holder",
    price: "$20",
    image: "/images/collection/product6.png",
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="bg-slate-50 py-24">
      <Container>
        <SectionHeader
          eyebrow="Best Sellers"
          title="Preview the Collection"
          description="Here's a sneak peek at the travel-inspired products coming to The Sociable Collection."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              {...product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}