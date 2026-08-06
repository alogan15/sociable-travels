import Image from "next/image";

const gallery = [
  {
    image: "/images/ambassador/gallery1.jpg",
    title: "Explore Together",
  },
  {
    image: "/images/ambassador/gallery2.jpg",
    title: "Create Memories",
  },
  {
    image: "/images/ambassador/gallery3.jpg",
    title: "Represent the Brand",
  },
  {
    image: "/images/ambassador/gallery4.jpg",
    title: "Adventure Awaits",
  },
];

export default function AmbassadorGallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-[#F54284]">
            Our Community
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Picture Yourself
            <span className="text-[#39D5E8]"> Here.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our ambassadors aren't just travelers—they're storytellers,
            explorers, and community builders who inspire others to see the
            world one adventure at a time.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((photo) => (
            <div
              key={photo.title}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-semibold text-white">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}