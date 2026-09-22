import SectionHeader from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Privacy Policy | Sociable Travels",
  description:
    "Learn how Sociable Travels collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            eyebrow="Sociable Travels"
            title="Privacy Policy"
            description="Your privacy matters to us. This policy explains how Sociable Travels handles information submitted through our website."
          />
        </div>
      </section>

      {/* Policy */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-10 px-6 text-slate-700">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              1. Information We Collect
            </h2>

            <p className="mt-4 leading-7">
              Sociable Travels may collect information that you voluntarily
              provide when you contact us, request travel information, submit
              an inquiry, request a quote, or apply for one of our programs.
            </p>

            <p className="mt-4 leading-7">
              This information may include your name, email address, phone
              number, travel preferences, destination interests, and other
              information you choose to provide.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              2. How We Use Your Information
            </h2>

            <p className="mt-4 leading-7">
              Information submitted through our website may be used to:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Respond to your questions and inquiries.</li>
              <li>Provide travel quotes and recommendations.</li>
              <li>Assist with travel planning and arrangements.</li>
              <li>Communicate with you regarding your requested services.</li>
              <li>Review applications for our programs.</li>
              <li>Improve our website and customer experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              3. Information Sharing
            </h2>

            <p className="mt-4 leading-7">
              Sociable Travels does not sell your personal information.
            </p>

            <p className="mt-4 leading-7">
              Information may be shared when necessary to provide requested
              travel services, process bookings, communicate with travel
              suppliers, or otherwise fulfill a service you have requested.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              4. Travel Suppliers
            </h2>

            <p className="mt-4 leading-7">
              When you choose to book travel through Sociable Travels,
              information necessary to arrange your trip may be provided to
              airlines, hotels, resorts, cruise lines, transportation
              companies, tour operators, payment providers, or other travel
              suppliers involved in your booking.
            </p>

            <p className="mt-4 leading-7">
              Those companies may have their own privacy policies and terms
              governing how they handle personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              5. Website Forms
            </h2>

            <p className="mt-4 leading-7">
              Information submitted through forms on this website may be
              securely stored and used for the purpose for which it was
              submitted.
            </p>

            <p className="mt-4 leading-7">
              Please do not submit sensitive personal information through
              website forms unless specifically requested and required for
              your travel arrangements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              6. Cookies & Website Technologies
            </h2>

            <p className="mt-4 leading-7">
              Our website may use cookies, analytics tools, or similar
              technologies to help operate the website, understand website
              usage, and improve the user experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              7. Data Security
            </h2>

            <p className="mt-4 leading-7">
              Sociable Travels takes reasonable measures to protect
              information submitted through the website. However, no method
              of transmitting or storing information online can be guaranteed
              to be completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              8. Third-Party Websites
            </h2>

            <p className="mt-4 leading-7">
              Our website may contain links to third-party websites,
              including travel suppliers, social media platforms, payment
              services, or other external websites.
            </p>

            <p className="mt-4 leading-7">
              Sociable Travels is not responsible for the privacy practices
              or content of third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              9. Your Choices
            </h2>

            <p className="mt-4 leading-7">
              You may contact Sociable Travels to ask questions about
              information you have submitted through our website or to request
              that we review information associated with your inquiry.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              10. Contact Us
            </h2>

            <p className="mt-4 leading-7">
              If you have questions about this Privacy Policy, please contact
              Sociable Travels.
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
              This Privacy Policy should be reviewed and approved by Sociable
              Travels before publication as final legal policy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}