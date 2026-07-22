import { hero } from "@/data/hero";
import HeroButtons from "./HeroButtons";
import HeroTrustBar from "./HeroTrustBar";
import { kaushan } from "@/lib/fonts";

export default function HeroContent() {
  return (
    <div className="max-w-3xl text-white">
<p
  className={`${kaushan.className} mb-6 text-2xl md:text-3xl text-[var(--primary)]`}
>
  {hero.eyebrow}
</p>

      <h1 className="mb-8 text-6xl font-bold leading-tight lg:text-7xl">
        {hero.heading}
      </h1>

      <p className="mb-12 max-w-xl text-xl leading-8 text-gray-200 lg:max-w-xl">
        {hero.description}
      </p>

      <HeroButtons />


      {/* <HeroTrustBar /> */}
      
    </div>
  );
}