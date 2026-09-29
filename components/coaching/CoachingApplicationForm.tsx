
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const supportOptions = [
  "Attracting new clients / lead generation",
  "Social media strategy & content marketing",
  "Designing & hosting profitable group trips",
  "Supplier partnerships & maximizing commissions",
  "Closing sales & handling client inquiries",
];

type CoachingFormData = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  state: string;
  licenseOrHost: string;
  experience: string;
  niche: string;
  agencyType: string;
  primaryGoal: string;
  supportNeeds: string[];
  whyNow: string;
  commitment: string;
  paymentPreference: string;
  consultationTime: string;
};

const initialForm: CoachingFormData = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  state: "",
  licenseOrHost: "",
  experience: "",
  niche: "",
  agencyType: "",
  primaryGoal: "",
  supportNeeds: [],
  whyNow: "",
  commitment: "",
  paymentPreference: "",
  consultationTime: "",
};

export default function CoachingApplicationForm() {
  const [formData, setFormData] =
    useState<CoachingFormData>(initialForm);

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSupportChange = (option: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      supportNeeds: checked
        ? [...prev.supportNeeds, option]
        : prev.supportNeeds.filter((item) => item !== option),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (formData.supportNeeds.length === 0) {
        alert("Please select at least one area where you need support.");
        return;
      }

      const response = await fetch("/api/coaching", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit your application.");
      }

      alert(
        "Thank you! Your Business Builders coaching application has been received. Nastasia will follow up regarding your free consultation."
      );

      setFormData(initialForm);
    } catch (error) {
      console.error("Coaching application error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="application" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Business Builders Application
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Take the Next Step in Your Travel Business
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Complete the application below to be considered for the
            Sociable Travelers Business Builders coaching program.
            A free consultation is required before enrollment.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              3 Months
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              10 One-on-One Sessions
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              $800 Total
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-3xl bg-white p-6 shadow-xl md:p-10"
        >
          {/* Section 1 */}
          <div className="border-b border-slate-200 pb-8">
            <h3 className="text-xl font-bold text-slate-900">
              1. Basic Information & Verification
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Tell us about yourself and your travel business.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name *
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Business / Travel Agency Name *
                </label>
                <input
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                  placeholder="Your agency name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                  placeholder="(555) 555-5555"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  State *
                </label>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                  placeholder="Your state"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Seller of Travel License Number or Host Agency *
                </label>
                <input
                  name="licenseOrHost"
                  value={formData.licenseOrHost}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                  placeholder="License number or host agency"
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="border-b border-slate-200 pb-8">
            <h3 className="text-xl font-bold text-slate-900">
              2. Business Readiness & Experience
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Help us understand your experience and business structure.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  How long have you been a licensed travel agent? *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                >
                  <option value="">Select your experience</option>
                  <option value="Less than 6 months">
                    Less than 6 months
                  </option>
                  <option value="6 months to 2 years">
                    6 months to 2 years
                  </option>
                  <option value="2+ years">2+ years</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Primary Travel Niche / Focus *
                </label>
                <textarea
                  name="niche"
                  value={formData.niche}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                  placeholder="e.g., Luxury, Group Travel, Cruises, All-Inclusives, Destination Weddings"
                />
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-slate-700">
                  Are you an independent agency owner or affiliated with a host agency? *
                </p>
                <div className="space-y-3">
                  {[
                    "Independent agency owner",
                    "Affiliated with a host agency",
                  ].map((option) => (
                    <label key={option} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="agencyType"
                        value={option}
                        checked={formData.agencyType === option}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 accent-pink-600"
                      />
                      <span className="text-sm text-slate-700">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="border-b border-slate-200 pb-8">
            <h3 className="text-xl font-bold text-slate-900">
              3. Goals & Coaching Fit
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Tell us what you want to accomplish through coaching.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  What is your #1 goal for the next 3 months? *
                </label>
                <textarea
                  name="primaryGoal"
                  value={formData.primaryGoal}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                  placeholder="Describe your primary business goal..."
                />
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-slate-700">
                  Where are you currently stuck or need support? *
                </p>
                <div className="space-y-3 rounded-xl border border-slate-200 p-4">
                  {supportOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-start gap-3"
                    >
                      <input
                        type="checkbox"
                        checked={formData.supportNeeds.includes(option)}
                        onChange={(e) =>
                          handleSupportChange(option, e.target.checked)
                        }
                        className="mt-1 h-4 w-4 accent-pink-600"
                      />
                      <span className="text-sm leading-6 text-slate-700">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
                {formData.supportNeeds.length === 0 && (
                  <p className="mt-2 text-xs text-slate-500">
                    Select all that apply. At least one is required.
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Why do you want to join the program now? *
                </label>
                <textarea
                  name="whyNow"
                  value={formData.whyNow}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                  placeholder="Tell us why now is the right time..."
                />
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-slate-700">
                  Are you ready to commit to 10 one-on-one sessions and work between meetings? *
                </p>
                <div className="flex flex-wrap gap-6">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="commitment"
                        value={option}
                        checked={formData.commitment === option}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 accent-pink-600"
                      />
                      <span className="text-sm text-slate-700">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              4. Consultation & Payment Preference
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              The free consultation is required before enrollment.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="mb-3 text-sm font-medium text-slate-700">
                  Preferred Payment Method *
                </p>
                <div className="space-y-3">
                  {[
                    "Pay in full via PayPal or Zelle",
                    "Payment plan option",
                  ].map((option) => (
                    <label key={option} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentPreference"
                        value={option}
                        checked={formData.paymentPreference === option}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 accent-pink-600"
                      />
                      <span className="text-sm text-slate-700">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Preferred Time Window for Free Consultation *
                </label>
                <select
                  name="consultationTime"
                  value={formData.consultationTime}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                >
                  <option value="">Select a preferred time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit Coaching Application"}
            </button>
            <p className="mt-4 text-center text-sm text-slate-500">
              Submitting an application does not guarantee acceptance.
              A free consultation is required before enrollment.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}