export interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  rating: number;
  tags: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Jamaica",
    location: "Caribbean",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
    description:
      "Relax on white-sand beaches, enjoy authentic Jamaican cuisine, and experience unforgettable island adventures.",
    rating: 5,
    tags: ["Beach", "Resorts", "Family"],
  },
  {
    id: 2,
    name: "Bahamas",
    location: "Caribbean",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Escape to crystal-clear waters, luxurious resorts, and world-famous island excursions.",
    rating: 5,
    tags: ["Luxury", "Cruise", "Beach"],
  },
  {
    id: 3,
    name: "Cancún",
    location: "Mexico",
    image:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Experience vibrant nightlife, beautiful beaches, and all-inclusive resorts perfect for every traveler.",
    rating: 5,
    tags: ["All-Inclusive", "Beach", "Nightlife"],
  },
  {
    id: 4,
    name: "Punta Cana",
    location: "Dominican Republic",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
    description:
      "Enjoy luxurious beachfront resorts, championship golf courses, and endless sunshine.",
    rating: 5,
    tags: ["Luxury", "Golf", "Beach"],
  },
  {
    id: 5,
    name: "Aruba",
    location: "Caribbean",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
    description:
      "Known for year-round sunshine, turquoise waters, and some of the Caribbean's most beautiful beaches.",
    rating: 5,
    tags: ["Beach", "Adventure", "Couples"],
  },
  {
    id: 6,
    name: "Hawaii",
    location: "United States",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    description:
      "Discover volcanoes, waterfalls, tropical rainforests, and breathtaking coastal landscapes.",
    rating: 5,
    tags: ["Adventure", "Nature", "Family"],
  },
  {
    id: 7,
    name: "Paris",
    location: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    description:
      "Explore iconic landmarks, world-class dining, charming cafés, and unforgettable culture.",
    rating: 5,
    tags: ["City", "Romance", "Culture"],
  },
  {
    id: 8,
    name: "Dubai",
    location: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Experience futuristic architecture, luxury shopping, desert adventures, and unforgettable nightlife.",
    rating: 5,
    tags: ["Luxury", "City", "Adventure"],
  },
];