import Container from "@/components/layout/Container";
import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Images */}

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/collection/community1.jpg"
              alt="Travel Community"
              width={400}
              height={400}
              className="rounded-3xl object-cover"
            />

            <Image
              src="/images/collection/community2.jpg"
              alt="Travel Community"
              width={400}
              height={400}
              className="mt-8 rounded-3xl object-cover"
            />

            <Image
              src="/images/collection/community3.jpg"
              alt="Travel Community"
              width={400}
              height={400}
              className="rounded-3xl object-cover"
            />

            <Image
              src="/images/collection/community4.jpg"
              alt="Travel Community"
              width={400}
              height={400}
              className="mt-8 rounded-3xl object-cover"
            />
          </div>

          {/* Content */}

          <div>
            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-[var(--primary)]">
              Our Community
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Travel Better.
              <br />
              Travel Together.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every adventure tells a story. Whether you're relaxing on a
              tropical beach, boarding your dream cruise, or exploring a new
              city, The Sociable Collection is designed for travelers who love
              making memories and sharing the journey.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                ✅ Travel-inspired lifestyle
              </div>

              <div className="flex items-center gap-3">
                ✅ Premium quality apparel
              </div>

              <div className="flex items-center gap-3">
                ✅ Built for explorers
              </div>

              <div className="flex items-center gap-3">
                ✅ Represent the Sociable community
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}