export default function AmbassadorStory() {
  const highlights = [
    "Inspire future travelers",
    "Share authentic experiences",
    "Represent the Sociable community",
    "Explore the world together",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <div>
          <img
            src="/images/branding/ambassador-story.jpg"
            alt="Friends traveling together"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div>
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-[#F54284]">
            Our Story
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Travel Is Better
            <br />
            <span className="text-[#39D5E8]">
              When It's Shared.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Sociable Travels, we believe the best adventures become even
            more meaningful when they're shared. Our Brand Ambassador Program
            was created for passionate travelers who love inspiring others,
            discovering new destinations, and building genuine connections
            through travel.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're exploring your hometown or crossing continents,
            we're looking for ambassadors who represent positivity,
            authenticity, and a passion for adventure. Together we'll inspire
            more people to dream bigger, travel farther, and create memories
            that last a lifetime.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#39D5E8] text-white font-bold">
                  ✓
                </div>

                <span className="font-medium text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}