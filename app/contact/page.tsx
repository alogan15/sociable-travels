import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQ from "@/components/contact/FAQ";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <ContactForm />

          <ContactInfo />
        </div>
      </section>

      <FAQ />
    </>
  );
}