import CollectionHero from "@/components/collection/CollectionHero";
import FeaturedCollections from "@/components/collection/FeaturedCollections";
import ProductGrid from "@/components/collection/ProductGrid";
import CommunitySection from "@/components/collection/CommunitySection";
import CollectionCTA from "@/components/collection/CollectionCTA";
export default function CollectionPage() {
  return (
    <>
      <CollectionHero />
      <FeaturedCollections />
      <ProductGrid />
      <CommunitySection />
      <CollectionCTA />
    </>
  );
}