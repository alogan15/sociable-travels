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
              alt="Travel Advisor at Sociable Travels"
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

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Your Journey Starts
            <span className="block text-cyan-500">
              With Someone Who Cares
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Sociable Travels, you're more than a reservation number. Every
            itinerary is planned with care, attention to detail, and a genuine
            passion for helping people explore the world with confidence.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're celebrating a milestone, planning a family vacation,
            or taking your dream getaway, you'll have a dedicated advisor who
            listens, guides, and supports you every step of the way.
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
                Destination knowledge and trusted partners
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Heart className="text-cyan-500" />
              <span className="text-slate-700">
                Friendly support before, during, and after your trip
              </span>
            </div>
          </div>

          <div className="mt-10">
            <Button href="/contact">
              Start Planning Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}