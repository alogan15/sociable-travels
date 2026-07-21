import { hero } from "@/data/hero";
import HeroButtons from "./HeroButtons";
import HeroTrustBar from "./HeroTrustBar";

export default function HeroContent() {
  return (
    <div className="max-w-2xl text-white">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A64A]">
        {hero.eyebrow}
      </p>

      <h1 className="mb-6 text-6xl font-bold leading-tight lg:text-7xl">
        {hero.heading}
      </h1>

      <p className="mb-10 max-w-xl text-xl leading-8 text-gray-200">
        {hero.description}
      </p>

      <HeroButtons />

      <HeroTrustBar />
      
    </div>
  );
}