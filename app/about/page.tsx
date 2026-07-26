import Container from "@/components/layout/Container";


export default function AboutPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            About Sociable Travels
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Passionate about creating unforgettable travel experiences for every
            client.
          </p>
        </div>
      </Container>
    </main>
  );
}