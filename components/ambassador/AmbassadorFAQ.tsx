"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need thousands of followers to apply?",
    answer:
      "No. We value authenticity, engagement, and a genuine passion for travel more than follower count.",
  },
  {
    question: "Is there a cost to become an ambassador?",
    answer:
      "No. There is no fee to apply or participate in the Sociable Travels Brand Ambassador Program.",
  },
  {
    question: "How long does the application review take?",
    answer:
      "Most applications are reviewed within 1–2 weeks. We'll contact selected applicants directly.",
  },
  {
    question: "Can I live outside of Texas?",
    answer:
      "Absolutely. We welcome applications from travelers across the United States.",
  },
  {
    question: "What happens if I'm selected?",
    answer:
      "You'll receive onboarding information, ambassador resources, exclusive opportunities, and details about representing Sociable Travels.",
  },
];

export default function AmbassadorFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Questions?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know before applying.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}