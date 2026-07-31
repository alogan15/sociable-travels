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
    tags: ["Luxury", "Cruise", "Beach", "Resorts"],
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
    tags: ["All-Inclusive", "Luxury", "Golf", "Beach"],
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
    tags: ["City", "Romance", "Luxury", "Culture"],
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
  {
  id: 9,
  name: "Santorini",
  location: "Greece",
  image:
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
  description:
    "Discover breathtaking sunsets, whitewashed villages, and luxurious cliffside resorts overlooking the Aegean Sea.",
  rating: 5,
  tags: ["Romance", "Luxury", "Beach"],
},
{
  id: 10,
  name: "Maldives",
  location: "Indian Ocean",
  image:
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
  description:
    "Escape to overwater villas, crystal-clear lagoons, and one of the world's most luxurious island destinations.",
  rating: 5,
  tags: ["Luxury", "Beach", "Romance"],
},
{
  id: 11,
  name: "Costa Rica",
  location: "Central America",
  image:
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
  description:
    "Explore lush rainforests, volcanoes, waterfalls, and unforgettable eco-adventures.",
  rating: 5,
  tags: ["Adventure", "Nature", "Family"],
},
{
  id: 12,
  name: "Alaska Cruise",
  location: "United States",
  image:
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
  description:
    "Experience towering glaciers, incredible wildlife, and breathtaking scenery aboard an unforgettable cruise.",
  rating: 5,
  tags: ["Cruise", "Adventure", "Family"],
},
{
  id: 13,
  name: "Bora Bora",
  location: "French Polynesia",
  image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  description:
    "Relax in iconic overwater bungalows surrounded by turquoise lagoons and tropical paradise.",
  rating: 5,
  tags: ["Luxury", "Romance", "Beach"],
},
{
  id: 14,
  name: "London",
  location: "England",
  image:
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
  description:
    "Experience royal history, world-famous landmarks, shopping, museums, and vibrant city life.",
  rating: 5,
  tags: ["City", "Culture", "Luxury"],
},
{
  id: 15,
  name: "Tokyo",
  location: "Japan",
  image:
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
  description:
    "Discover a dynamic blend of ancient traditions, futuristic skylines, incredible cuisine, and endless entertainment.",
  rating: 5,
  tags: ["City", "Adventure", "Culture"],
},
{
  id: 16,
  name: "Orlando",
  location: "Florida, USA",
  image:
    "https://images.unsplash.com/photo-1597466599360-3b9775841aec?q=80&w=1200&auto=format&fit=crop",
  description:
    "Create unforgettable family memories with world-famous theme parks, resorts, and entertainment.",
  rating: 5,
  tags: ["Family", "Adventure"],
},
{
  id: 17,
  name: "Venice",
  location: "Italy",
  image:
    "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=1200&auto=format&fit=crop",
  description:
    "Enjoy romantic gondola rides, charming canals, historic architecture, and authentic Italian cuisine.",
  rating: 5,
  tags: ["Romance", "City", "Culture"],
},
{
  id: 18,
  name: "Turks & Caicos",
  location: "Caribbean",
  image:
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
  description:
    "Relax on award-winning beaches with crystal-clear waters and luxurious beachfront resorts.",
  rating: 5,
  tags: ["Beach", "Luxury", "Couples"],
},
{
  id: 19,
  name: "Mediterranean Cruise",
  location: "Southern Europe",
  image:
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
  description:
    "Sail through Europe's most beautiful coastal cities while enjoying luxury accommodations and unforgettable excursions.",
  rating: 5,
  tags: ["Cruise", "Luxury", "Romance"],
},
{
  id: 20,
  name: "New York City",
  location: "New York, USA",
  image:
    "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1200&auto=format&fit=crop",
  description:
    "Experience iconic landmarks, Broadway, world-class dining, shopping, and unforgettable city adventures.",
  rating: 5,
  tags: ["City", "Adventure", "Culture"],
},

];