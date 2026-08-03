"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travelers: string;
  budget: string;
  tripType: string;
  preferredContact: string;
  message: string;
};

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  destination: "",
  travelDates: "",
  travelers: "",
  budget: "",
  tripType: "",
  preferredContact: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setSuccessMessage(data.message);

      setFormData(initialFormData);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(
          "Something went wrong. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form">
      <div className="mb-10">
        <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          Let's Connect
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          Start Planning Your Next Adventure
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Tell us about your dream vacation and we'll help make it a reality.
        </p>
      </div>


      {errorMessage && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {errorMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
      >
        {/* First + Last Name */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block font-medium text-slate-700"
            >
              First Name *
            </label>

            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block font-medium text-slate-700"
            >
              Last Name *
            </label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            />
          </div>
        </div>

        {/* Email + Phone */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-slate-700"
            >
              Email Address *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block font-medium text-slate-700"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            />
          </div>
        </div>

        {/* Destination + Dates */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="destination"
              className="mb-2 block font-medium text-slate-700"
            >
              Dream Destination
            </label>

            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="Bahamas, Greece, Italy..."
              value={formData.destination}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            />
          </div>

          <div>
            <label
              htmlFor="travelDates"
              className="mb-2 block font-medium text-slate-700"
            >
              Preferred Travel Dates
            </label>

            <input
              id="travelDates"
              name="travelDates"
              type="text"
              placeholder="June 2027"
              value={formData.travelDates}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            />
          </div>
        </div>

        {/* Travelers */}

        <div>
          <label
            htmlFor="travelers"
            className="mb-2 block font-medium text-slate-700"
          >
            Number of Travelers
          </label>

          <select
            id="travelers"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
          >
            <option value="">Select...</option>
            <option value="1">1 Traveler</option>
            <option value="2">2 Travelers</option>
            <option value="3-5">3–5 Travelers</option>
            <option value="6-10">6–10 Travelers</option>
            <option value="10+">10+ Travelers</option>
          </select>
        </div>



        {/* Budget */}

          <div>
            <label
              htmlFor="budget"
              className="mb-2 block font-medium text-slate-700"
            >
              Estimated Budget
            </label>

            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              <option value="">Select Budget</option>
              <option value="Under $2,000">Under $2,000</option>
              <option value="$2,000 - $5,000">$2,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="tripType"
              className="mb-2 block font-medium text-slate-700"
            >
              What type of trip are you planning?
            </label>

            <select
              id="tripType"
              name="tripType"
              value={formData.tripType}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              <option value="">Select Trip Type</option>
              <option value="Family Vacation">Family Vacation</option>
              <option value="Couples Getaway">Couples Getaway</option>
              <option value="Group Trip">Group Trip</option>
              <option value="Cruise">Cruise</option>
              <option value="Honeymoon">Honeymoon</option>
              <option value="Birthday Celebration">Birthday Celebration</option>
              <option value="Corporate Travel">Corporate Travel</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block font-medium text-slate-700">
              Preferred Contact Method
            </label>

            <div className="flex flex-wrap gap-6">
              {["Email", "Phone", "Text"].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method}
                    checked={formData.preferredContact === method}
                    onChange={handleChange}
                  />

                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

        {/* Message */}

        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-medium text-slate-700"
          >
            Tell Us About Your Trip
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your dream vacation, special occasion, destinations you're considering, or anything you'd like us to know..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        {/* Submit */}

          {successMessage && (
            <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-cyan-700">
              <p className="font-semibold text-slate-900">
                Consultation Request Received!
              </p>

              <p className="mt-1 text-slate-600">
                Thank you for contacting Sociable Travels. We'll review your request and reach out shortly.
              </p>            
          </div>
          )}

          {errorMessage && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
              ❌ {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]"
          >
            Request My Free Consultation
          </button>
      </form>
    </section>
  );
}