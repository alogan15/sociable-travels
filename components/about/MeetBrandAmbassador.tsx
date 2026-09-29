
import Image from "next/image";
import { Award, Globe2, Heart, Plane } from "lucide-react";

export default function MeetBrandAmbassador() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Ambassador Photo */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/brand-mgr.JPG"
              alt="Faith, Brand Ambassador at Sociable Travels"
              width={500}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-600">
            Meet Our Brand Ambassador
          </span>

          <div className="mt-6">
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Faith
            </h2>

            <p className="mt-2 text-lg font-semibold text-pink-500">
              Brand Ambassador
            </p>
          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Faith is passionate about travel and the opportunities
            it creates to explore new places, experience different
            cultures, and make lasting memories. As a Brand
            Ambassador for Sociable Travels, she shares her
            enthusiasm for travel and helps inspire others to
            discover new destinations.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Through her role, Faith helps spread the word about
            Sociable Travels, connects with fellow travel
            enthusiasts, and encourages others to turn their
            travel dreams into memorable experiences. Her
            enthusiasm and personal perspective help bring
            the Sociable Travels community together.
          </p>

          <div className="mt-10 grid gap-5">
            <div className="flex items-center gap-4">
              <Award className="text-pink-500" />
              <span className="text-slate-700">
                Brand representation and engagement
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Globe2 className="text-pink-500" />
              <span className="text-slate-700">
                Exploring destinations and travel opportunities
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Plane className="text-pink-500" />
              <span className="text-slate-700">
                Sharing travel inspiration
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Heart className="text-pink-500" />
              <span className="text-slate-700">
                Building connections within the travel community
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}