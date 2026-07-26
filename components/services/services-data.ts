import {
  Plane,
  Ship,
  Hotel,
  Users,
  Heart,
  Globe,
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: typeof Plane;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Vacation Packages",
    description:
      "Customized vacation experiences designed around your destination, budget, and travel style.",
    icon: Plane,
  },
  {
    id: 2,
    title: "Cruises",
    description:
      "Explore the world by sea with premium cruise lines offering unforgettable adventures and luxury amenities.",
    icon: Ship,
  },
  {
    id: 3,
    title: "All-Inclusive Resorts",
    description:
      "Relax knowing your accommodations, dining, entertainment, and more are all included.",
    icon: Hotel,
  },
  {
    id: 4,
    title: "Family Vacations",
    description:
      "Create lifelong memories with family-friendly destinations, theme parks, and beach resorts.",
    icon: Users,
  },
  {
    id: 5,
    title: "Romantic Getaways",
    description:
      "Celebrate honeymoons, anniversaries, and special occasions with unforgettable escapes.",
    icon: Heart,
  },
  {
    id: 6,
    title: "Group Travel",
    description:
      "From destination weddings to reunions and corporate retreats, we make group travel stress-free.",
    icon: Globe,
  },
];