import Container from "@/components/layout/Container";


export default function ServicesPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Our Services
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Personalized travel planning designed to make every journey seamless,
            memorable, and stress-free.
          </p>
        </div>
      </Container>
    </main>
  );
}