export interface Review {
  id: number;
  name: string;
  destination: string;
  rating: number;
  quote: string;
  review: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Markel Foster",
    destination: "Punta Cana, Dominican Republic",
    rating: 5,
    quote:
      "From the very beginning, she made planning this trip easy and stress-free. Every recommendation was on point, and our vacation exceeded every expectation.",
    review:
      "From the very beginning, Nastasia made planning our Punta Cana vacation easy and stress-free. Every recommendation she shared before we left made our trip even better. The resort exceeded our expectations, and the staff made us feel welcome from the moment we arrived. If you're looking for someone who genuinely cares about every detail of your vacation, I highly recommend Sociable Travels. We can't wait to book our next adventure.",
  },
  {
    id: 2,
    name: "Tameka Nelson",
    destination: "Thailand",
    rating: 5,
    quote:
      "She was there every step of the way. Her dedication, professionalism, and genuine care gave us complete peace of mind throughout our trip.",
    review:
      "Traveling to Thailand was a big trip for our family, and we wanted everything to be perfect. Sociable Travels delivered exactly that. From months of planning until we landed safely back home, Nastasia was there every step of the way. She even went above and beyond when we almost missed our flight by helping coordinate with the hotel and transportation service. Her professionalism and genuine care gave us peace of mind throughout the entire vacation.",
  },
 {
  id: 3,
  name: "Hazel L.",
  destination: "Stress-Free Travel Planning",
  rating: 5,
  quote:
    "When unexpected changes forced me to cancel my trip, she handled everything with compassion, professionalism, and incredible attention to detail.",
  review:
    "I cannot recommend Sociable Travels highly enough. When unforeseen events forced me to cancel my Dubai trip, Nastasia immediately stepped in and handled everything with professionalism, compassion, and incredible knowledge. She quickly adjusted my accommodations to a new destination and managed every detail I never could have handled on my own. Her responsiveness, attention to detail, and genuine care made the entire process effortless. She took all the stress out of travel planning, and I'm already trusting her with my next trip. If you want stress-free travel planning, Sociable Travels is the place.",
}
];