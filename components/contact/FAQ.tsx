"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    question: "Do I pay extra to use a travel advisor?",
    answer:
      "In many cases, our travel planning services are provided at no additional cost to you. Some specialized itineraries or custom planning services may include a planning fee, which will always be discussed upfront before any work begins.",
  },
  {
    question: "How far in advance should I book my vacation?",
    answer:
      "We recommend booking as early as possible to secure the best pricing, availability, and travel options. However, we can also help with last-minute getaways whenever possible.",
  },
  {
    question: "Can you help plan group travel?",
    answer:
      "Absolutely! We specialize in coordinating vacations for families, friends, destination weddings, reunions, corporate retreats, and other group travel experiences.",
  },
  {
    question: "Do you book cruises and all-inclusive resorts?",
    answer:
      "Yes! Whether you're dreaming of an ocean cruise, river cruise, luxury resort, adults-only escape, or an all-inclusive family vacation, we'll help you find the perfect fit.",
  },
  {
    question: "What happens if I need to change or cancel my trip?",
    answer:
      "Travel plans can change. We'll guide you through your supplier's change or cancellation policies and help you explore the best available options based on your booking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Have Questions?"
          description="Here are answers to some of the questions we hear most often. If you don't see what you're looking for, we're always happy to help."
        />

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50"
              >
                <h3 className="pr-4 text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <ChevronUp className="text-cyan-600" size={22} />
                ) : (
                  <ChevronDown className="text-cyan-600" size={22} />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 px-6 pb-6"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            We'd love to help. Reach out using the contact form above, and we'll
            get back to you as soon as possible.
          </p>

          <a
            href="#contact-form"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}