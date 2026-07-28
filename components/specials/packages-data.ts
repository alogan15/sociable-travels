export interface TravelPackage {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
  startingPrice: string;
  duration: string;
  badge: string;
}

export const travelPackages: TravelPackage[] = [
  {
    id: 1,
    title: "Caribbean Escape",
    location: "Jamaica",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Unwind on white-sand beaches with all-inclusive luxury, crystal-clear waters, and unforgettable island adventures.",
    startingPrice: "$999",
    duration: "5 Nights",
    badge: "Popular",
  },
  {
    id: 2,
    title: "Luxury Cruise",
    location: "Caribbean",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    description:
      "Sail to breathtaking destinations while enjoying world-class dining, entertainment, and oceanfront relaxation.",
    startingPrice: "$1,299",
    duration: "7 Nights",
    badge: "Best Value",
  },
  {
    id: 3,
    title: "Romantic Getaway",
    location: "Maldives",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
    description:
      "Celebrate love with luxurious overwater villas, stunning sunsets, and unforgettable experiences.",
    startingPrice: "$2,499",
    duration: "6 Nights",
    badge: "Couples",
  },
  {
    id: 4,
    title: "Family Adventure",
    location: "Orlando",
    image:
      "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=1200&auto=format&fit=crop",
    description:
      "Create lifelong memories with thrilling attractions, family-friendly resorts, and endless fun.",
    startingPrice: "$1,199",
    duration: "5 Nights",
    badge: "Family Favorite",
  },
  {
    id: 5,
    title: "European Discovery",
    location: "Paris & Rome",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
    description:
      "Experience iconic landmarks, incredible cuisine, and unforgettable culture across Europe.",
    startingPrice: "$2,199",
    duration: "8 Nights",
    badge: "New",
  },
  {
    id: 6,
    title: "Tropical Paradise",
    location: "Bahamas",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
    description:
      "Relax on pristine beaches, snorkel vibrant reefs, and enjoy luxury island accommodations.",
    startingPrice: "$1,099",
    duration: "5 Nights",
    badge: "Limited Time",
  },
];