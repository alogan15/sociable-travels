import SectionHeader from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Terms & Conditions | Sociable Travels",
  description:
    "Review the terms and conditions for booking travel and using Sociable Travels services.",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            eyebrow="Sociable Travels"
            title="Terms & Conditions"
            description="Please review the following terms before booking travel services with Sociable Travels."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-10 px-6 text-slate-700">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              1. Travel Bookings
            </h2>

            <p className="mt-4 leading-7">
              Sociable Travels assists clients with planning and arranging
              travel experiences, including vacations, cruises, group trips,
              accommodations, transportation, and related travel services.
            </p>

            <p className="mt-4 leading-7">
              All travel arrangements are subject to availability and the
              terms, conditions, and policies of the applicable travel
              suppliers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              2. Deposits
            </h2>

            <p className="mt-4 leading-7">
              Deposits are required to secure eligible travel arrangements and
              are non-refundable.
            </p>

            <p className="mt-4 leading-7">
              Deposit requirements may vary depending on the specific trip,
              supplier, promotion, or travel package.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              3. Payments
            </h2>

            <p className="mt-4 leading-7">
              Payment schedules and amounts will be provided to the traveler
              based on the selected travel arrangement.
            </p>

            <p className="mt-4 leading-7">
              Payments must be made in the traveler's name.
            </p>

            <p className="mt-4 leading-7">
              Credit cards are not accepted for deposits. Credit card payments
              may be accepted for the third or fourth scheduled payment,
              depending on the applicable travel arrangement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              4. Pricing & Availability
            </h2>

            <p className="mt-4 leading-7">
              Travel prices, availability, promotions, fees, taxes, and
              supplier requirements may change at any time prior to booking.
              Prices displayed on the website may be subject to availability
              and applicable booking conditions.
            </p>

            <p className="mt-4 leading-7">
              Travelers should contact Sociable Travels for current pricing
              and availability before making payment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              5. Cancellations & Refunds
            </h2>

            <p className="mt-4 leading-7">
              Cancellation and refund terms may vary depending on the travel
              supplier, destination, package, and booking conditions.
            </p>

            <p className="mt-4 leading-7">
              The applicable cancellation and refund policies will be
              communicated to the traveler when applicable.
            </p>

            <p className="mt-4 font-semibold leading-7 text-slate-900">
              Deposits are non-refundable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              6. Traveler Responsibility
            </h2>

            <p className="mt-4 leading-7">
              Travelers are responsible for providing accurate information
              required to arrange their travel and for reviewing travel
              documents, payment schedules, and supplier requirements.
            </p>

            <p className="mt-4 leading-7">
              Travelers are also responsible for ensuring that they have
              appropriate identification, passports, visas, and other required
              travel documentation when applicable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              7. Travel Suppliers
            </h2>

            <p className="mt-4 leading-7">
              Sociable Travels works with airlines, hotels, cruise lines,
              resorts, transportation providers, tour operators, and other
              travel suppliers.
            </p>

            <p className="mt-4 leading-7">
              Supplier policies and terms may apply to individual bookings and
              may differ from the general information provided on this
              website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              8. Website Information
            </h2>

            <p className="mt-4 leading-7">
              Sociable Travels makes reasonable efforts to provide accurate
              information on this website. However, travel information,
              pricing, availability, promotions, schedules, and supplier
              policies may change without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              9. Contact
            </h2>

            <p className="mt-4 leading-7">
              Questions regarding these terms or a specific travel
              arrangement can be directed to Sociable Travels.
            </p>

            <p className="mt-4 leading-7">
              Email: Sociabletravels34@gmail.com
              <br />
              Phone: (832) 543-6351
              <br />
              Location: Houston, Texas
            </p>
          </div>

          <div className="border-t border-slate-200 pt-8 text-sm text-slate-500">
            <p>
              These Terms & Conditions should be reviewed and approved by
              Sociable Travels before publication as final legal terms.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}