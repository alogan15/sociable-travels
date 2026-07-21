import Button from "@/components/ui/Button";
import { hero } from "@/data/hero";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5">
      <Button href={hero.primaryButton.href}>
        {hero.primaryButton.text}
      </Button>

      <Button
        href={hero.secondaryButton.href}
        variant="secondary"
      >
        {hero.secondaryButton.text}
      </Button>
    </div>
  );
}