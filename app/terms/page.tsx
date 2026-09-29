import SectionHeader from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Terms & Conditions | Sociable Travels",
  description:
    "Review the terms and conditions governing travel bookings and services provided by Sociable Travels.",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            eyebrow="Sociable Travels"
            title="Terms & Conditions"
            description="Please review these terms before booking travel or engaging Sociable Travels for travel services."
          />
        </div>
      </section>

      {/* Terms */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-10 px-6 text-slate-700">
          {/* 1 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              1. About Sociable Travels
            </h2>

            <p className="mt-4 leading-7">
              Sociable Travels is a travel agency providing independent travel
              services, including assistance with researching, planning, and
              arranging travel experiences.
            </p>

            <p className="mt-4 leading-7">
              Sociable Travels acts as an intermediary and booking agent for
              independent travel suppliers and does not own, control, or
              operate the airlines, hotels, resorts, cruise lines,
              transportation providers, tour operators, or other suppliers
              involved in a client's travel arrangements.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              2. Booking Authorization
            </h2>

            <p className="mt-4 leading-7">
              All travel bookings, quotes, reservations, and related
              arrangements require client approval and written or electronic
              authorization before payment processing.
            </p>

            <p className="mt-4 leading-7">
              A quote or travel option provided by Sociable Travels does not
              guarantee pricing, availability, or a reservation until the
              applicable supplier has confirmed the booking.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              3. Payments
            </h2>

            <p className="mt-4 leading-7">
              Payments for travel packages, flights, hotels, cruises, tours,
              and other travel services are processed directly with the
              applicable supplier partners, including airlines, resort
              brands, tour operators, and cruise lines.
            </p>

            <p className="mt-4 leading-7">
              Accepted payment methods may include major credit cards, debit
              cards, and other approved electronic payment methods, depending
              on the applicable supplier.
            </p>

            <p className="mt-4 leading-7">
              Payment due dates and final balance deadlines are established by
              the individual travel supplier. Failure to make a required
              payment by the applicable deadline may result in cancellation,
              loss of availability, forfeiture of payments, or other supplier
              penalties.
            </p>

            <p className="mt-4 leading-7">
              Any Sociable Travels agency service fees, if applicable, are
              separate from supplier charges and will be disclosed before
              booking.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              4. Pricing & Availability
            </h2>

            <p className="mt-4 leading-7">
              Travel prices, availability, promotions, taxes, fees, schedules,
              and supplier requirements may change without notice until a
              booking has been confirmed and locked by the applicable
              supplier.
            </p>

            <p className="mt-4 leading-7">
              Website prices and promotional information are provided for
              informational purposes and may not reflect current availability
              or final pricing.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              5. Cancellations & Refunds
            </h2>

            <p className="mt-4 leading-7">
              Cancellation policies, penalties, credits, and refund
              eligibility are governed primarily by the terms and conditions
              of the applicable travel supplier.
            </p>

            <p className="mt-4 leading-7">
              Many supplier deposits, instant-purchase airfares,
              administrative fees, and travel insurance premiums may be
              non-refundable.
            </p>

            <p className="mt-4 leading-7">
              Cancellation requests must be submitted in writing by email.
              Sociable Travels will communicate the request to the applicable
              supplier, but processing and refund eligibility remain subject
              to the supplier's policies and deadlines.
            </p>

            <p className="mt-4 leading-7">
              Changes made after a reservation has been confirmed may result
              in supplier change fees and/or applicable Sociable Travels
              administrative fees.
            </p>

            <p className="mt-4 font-semibold leading-7 text-slate-900">
              Sociable Travels strongly recommends purchasing comprehensive
              travel protection or insurance at the time of booking.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              6. Travel Supplier Responsibility
            </h2>

            <p className="mt-4 leading-7">
              Sociable Travels does not own, control, or operate the
              independent suppliers used to fulfill travel arrangements.
            </p>

            <p className="mt-4 leading-7">
              Sociable Travels is not responsible for the acts, errors,
              omissions, warranties, breaches, negligence, defaults, or
              failures of independent travel suppliers.
            </p>

            <p className="mt-4 leading-7">
              This includes, but is not limited to, personal injury, death,
              property damage, delays, cancellations, schedule changes, or
              other losses arising from the actions or failures of third-party
              suppliers.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              7. Events Outside Our Control
            </h2>

            <p className="mt-4 leading-7">
              Sociable Travels is not responsible for delays, cancellations,
              schedule changes, losses, or other disruptions caused by events
              outside its reasonable control.
            </p>

            <p className="mt-4 leading-7">
              Such events may include weather, natural disasters, acts of God,
              pandemics, government restrictions, strikes, civil unrest,
              terrorism, or other circumstances affecting travel services.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              8. Traveler Responsibilities
            </h2>

            <p className="mt-4 leading-7">
              Travelers are responsible for providing accurate and complete
              information necessary to arrange their travel.
            </p>

            <p className="mt-4 leading-7">
              Travelers are also responsible for reviewing their booking
              confirmations, payment schedules, supplier requirements, and
              travel documentation.
            </p>

            <p className="mt-4 leading-7">
              Travelers are responsible for obtaining and maintaining all
              required travel documents, including valid passports, visas,
              health or vaccination documentation, and entry permissions when
              applicable.
            </p>

            <p className="mt-4 leading-7">
              Travelers should ensure that their passport is valid for at
              least six months beyond their travel return date when required
              by applicable destination or supplier requirements.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              9. Website Information
            </h2>

            <p className="mt-4 leading-7">
              Sociable Travels makes reasonable efforts to provide accurate
              information on its website. However, website content is
              informational and promotional in nature.
            </p>

            <p className="mt-4 leading-7">
              Prices, availability, travel rules, schedules, promotions, and
              supplier requirements may change without notice until a booking
              is confirmed.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              10. Intellectual Property
            </h2>

            <p className="mt-4 leading-7">
              Website content, branding, written materials, graphics, and
              other materials belonging to Sociable Travels may not be
              reproduced, copied, modified, distributed, or redistributed
              without prior written authorization.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              11. Privacy
            </h2>

            <p className="mt-4 leading-7">
              Sociable Travels collects and uses personal information as
              described in its Privacy Policy. By submitting information
              through the website or engaging Sociable Travels for travel
              services, you acknowledge that your information may be used and
              shared as necessary to fulfill requested services.
            </p>

            <p className="mt-4 leading-7">
              Please review the{" "}
              <a
                href="/privacy"
                className="font-semibold text-[var(--primary)] underline underline-offset-4"
              >
                Privacy Policy
              </a>{" "}
              for additional information.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              12. Governing Law
            </h2>

            <p className="mt-4 leading-7">
              These Terms & Conditions are governed by applicable state laws
              and regulations.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              13. Contact Sociable Travels
            </h2>

            <p className="mt-4 leading-7">
              Questions regarding these Terms & Conditions, a specific
              booking, or Sociable Travels services may be directed to:
            </p>

            <p className="mt-4 leading-7">
              <strong>Contact Person:</strong> Nastasia Staten
              <br />
              <strong>Email:</strong> Sociabletravels34@gmail.com
              <br />
              <strong>Phone:</strong> (832) 543-6351
              <br />
              <strong>Location:</strong> Houston, Texas
            </p>
          </div>

          {/* Legal Review */}
          <div className="border-t border-slate-200 pt-8 text-sm text-slate-500">
            <p>
              These Terms & Conditions are provided for website publication
              based on information supplied by Sociable Travels. Sociable
              Travels should review and approve these terms before publication
              as its final legal policy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}