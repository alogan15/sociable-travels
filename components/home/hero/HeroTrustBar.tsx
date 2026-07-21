import { Plane, Palmtree, MessageCircle } from "lucide-react";

export default function HeroTrustBar() {
  return (
    <div className="mt-14 w-full max-w-4xl rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur">
      <div className="grid gap-8 md:grid-cols-3">
        <TrustItem
          icon={<Plane className="h-8 w-8 text-[#0B3C5D]" />}
          title="Personalized"
          subtitle="Travel Planning"
        />

        <TrustItem
          icon={<Palmtree className="h-8 w-8 text-[#D4A64A]" />}
          title="Group Trips"
          subtitle="Cruises & Resorts"
        />

        <TrustItem
          icon={<MessageCircle className="h-8 w-8 text-[#0B3C5D]" />}
          title="Friendly"
          subtitle="One-on-One Service"
        />
      </div>
    </div>
  );
}

function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-4">
      {icon}

      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}