import Container from "@/components/layout/Container";


export default function ReviewsPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Client Reviews
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Hear what travelers have to say about their experiences with
            Sociable Travels.
          </p>
        </div>
      </Container>
    </main>
  );
}