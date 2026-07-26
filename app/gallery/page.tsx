import Container from "@/components/layout/Container";


export default function GalleryPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Travel Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Explore beautiful destinations and unforgettable moments from around
            the world.
          </p>
        </div>
      </Container>
    </main>
  );
}