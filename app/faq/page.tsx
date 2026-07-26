import Container from "@/components/layout/Container";



export default function FAQPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Find answers to common questions about planning and booking your next
            vacation.
          </p>
        </div>
      </Container>
    </main>
  );
}