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
];