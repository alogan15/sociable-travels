import Button from "@/components/ui/Button";
import Image from "next/image";
import { Award, Globe2, Heart } from "lucide-react";

export default function MeetBrandManager() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">


                {/* Advisor Photo */}
                <div className="relative">
                  <div className="overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="/images/brand-ambassador.png"
                      alt="Samiya K., Brand Manager at Sociable Travels"
                      width={500}
                      height={650}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
        
        
        {/* Content */}
        <div>
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-600">
            Meet Our Brand Manager
          </span>

          <div className="mt-6">
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Samiya
            </h2>

            <p className="mt-2 text-lg font-semibold text-pink-500">
              Brand Manager
            </p>
          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Samiyа is the creative force behind the Sociable Travels brand, helping shape the experience clients have before they ever pack a suitcase. With a passion for travel and storytelling, she brings creativity, attention to detail, and a genuine love for exploring new places to everything she does.
            Her own travel experiences span destinations and cities including Dubai, Thailand, Panama, St. Louis, New Orleans, Las Vegas, and West Palm Beach, just to name a few. These experiences have given her a firsthand appreciation for the excitement, culture, and memories that travel can create—and inspire her to help bring those same experiences to Sociable Travels clients.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
From brand strategy and marketing to customer engagement and visual storytelling, Samiyа helps bring the Sociable Travels vision to life. Her goal is to create memorable experiences that begin long before the journey itself.

            Her passion for storytelling and attention to detail help bring the
            company's vision to life, creating memorable experiences that begin
            long before the journey itself.
          </p>

          <div className="mt-10 grid gap-5">
            <div className="flex items-center gap-4">
              <Award className="text-pink-500" />
              <span className="text-slate-700">
                Brand strategy & customer engagement
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Globe2 className="text-pink-500" />
              <span className="text-slate-700">
                Creative marketing & visual storytelling
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Heart className="text-pink-500" />
              <span className="text-slate-700">
                Creating memorable client experiences
              </span>
            </div>
          </div>
{/* 
          <div className="mt-10">
            <Button href="/contact">
              Start Planning Together
            </Button>
          </div> */}
        </div>

        {/* Image Placeholder */}
        {/* <div className="relative">
          <div className="flex h-[700px] items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-100 shadow-2xl">
            <p className="text-center text-lg font-medium text-slate-400">
              Brand Manager Photo
              <br />
              (Coming Soon)
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}