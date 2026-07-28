 import Image from "next/image";
import Button from "@/components/ui/Button";
import { Award, Globe2, Heart } from "lucide-react";

export default function MeetAdvisor() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Advisor Photo */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/about-story.jpg"
              alt="Nastasia S., Travel Advisor at Sociable Travels"
              width={700}
              height={850}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            Meet Your Travel Advisor
          </span>

          <div className="mt-6">
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Nastasia S.
            </h2>

            <p className="mt-2 text-lg font-semibold text-cyan-500">
              Travel Advisor
            </p>
          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            With a passion for creating unforgettable travel experiences,
            Nastasia works closely with every client to design personalized
            vacations that fit their dreams, budget, and travel style. Whether
            you're planning a relaxing beach escape, an exciting cruise, or a
            once-in-a-lifetime adventure, she's committed to making every
            journey seamless from start to finish.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Sociable Travels, you're more than a reservation number. Every
            itinerary is planned with care, attention to detail, and genuine
            dedication to helping travelers create memories that last a
            lifetime.
          </p>

          <div className="mt-10 grid gap-5">
            <div className="flex items-center gap-4">
              <Award className="text-cyan-500" />
              <span className="text-slate-700">
                Personalized travel planning
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Globe2 className="text-cyan-500" />
              <span className="text-slate-700">
                Destination knowledge and trusted travel partners
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Heart className="text-cyan-500" />
              <span className="text-slate-700">
                Friendly support before, during, and after your trip
              </span>
            </div>
          </div>

          {/* <div className="mt-10">
            <Button href="/contact">
              Start Planning Together
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}