import Button from "@/components/ui/Button";
import { Award, Globe2, Heart } from "lucide-react";

export default function MeetBrandManager() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
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
            Samiya is the creative force behind the Sociable Travels brand,
            helping shape the experience clients have before they ever pack a
            suitcase. From branding and marketing to customer engagement, she
            ensures every interaction reflects the warmth, professionalism, and
            excitement that Sociable Travels is known for.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
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