"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type AmbassadorFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;

  ageVerified: boolean;

  instagram: string;
  tiktok: string;
  facebook: string;
  youtube: string;
  website: string;

  primaryPlatform: string;
  contentTypes: string[];

  whyAmbassador: string;
  travelStyle: string;

  previousAmbassadorExperience: string;
  previousBrandNames: string;

  promotionPlan: string;

  videoContentComfort: string;
  upcomingTravel: string;

  howHeard: string;

  ambassadorAcknowledgment: boolean;
};

const initialForm: AmbassadorFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  state: "",

  ageVerified: false,

  instagram: "",
  tiktok: "",
  facebook: "",
  youtube: "",
  website: "",

  primaryPlatform: "",
  contentTypes: [],

  whyAmbassador: "",
  travelStyle: "",

  previousAmbassadorExperience: "",
  previousBrandNames: "",

  promotionPlan: "",

  videoContentComfort: "",
  upcomingTravel: "",

  howHeard: "",

  ambassadorAcknowledgment: false,
};

export default function AmbassadorForm() {
  const [formData, setFormData] =
    useState<AmbassadorFormData>(initialForm);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/ambassador", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to submit application.");
    }

    console.log("Ambassador application submitted:", data);

    alert(
      "Thank you! Your Sociable Travels Brand Ambassador application has been received."
    );
  } catch (error) {
    console.error("Ambassador application error:", error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  }
};

  return (
  <section id="apply" className="bg-slate-50 py-24">
    <div className="mx-auto max-w-5xl px-6 lg:px-8">

      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-[#39D5E8]/15 px-4 py-2 text-sm font-semibold text-[#39D5E8]">
          Application
        </span>

        <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
          Ready to Join the Community?
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Tell us a little about yourself and why you'd make an amazing
          Sociable Travels Brand Ambassador.
        </p>
      </div>

<form
  onSubmit={handleSubmit}
  className="mt-16 space-y-8 rounded-3xl bg-white p-10 shadow-xl"
>


  {/* Section 1: Basic Information */}

<div className="border-b border-slate-200 pb-4">
  <h3 className="text-2xl font-bold text-slate-900">
    1. Basic Information
  </h3>

  <p className="mt-2 text-sm text-slate-500">
    Tell us a little about yourself.
  </p>
</div>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block font-medium">
      First Name *
    </label>

    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      required
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block font-medium">
      Last Name *
    </label>

    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      required
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />
  </div>

</div>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block font-medium">
      Email Address *
    </label>

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block font-medium">
      Phone Number *
    </label>

    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />
  </div>

</div>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block font-medium">
      City *
    </label>

    <input
      type="text"
      name="city"
      value={formData.city}
      onChange={handleChange}
      required
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block font-medium">
      State / Region *
    </label>

    <input
      type="text"
      name="state"
      value={formData.state}
      onChange={handleChange}
      required
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />
  </div>

</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
  <label className="flex items-start gap-4">
    <input
      type="checkbox"
      name="ageVerified"
      checked={formData.ageVerified}
      onChange={handleChange}
      required
      className="mt-1 h-5 w-5 rounded border-slate-300 accent-[var(--primary)]"
    />

    <span className="leading-7 text-slate-700">
      I confirm that I am <strong>18 years of age or older.</strong>
    </span>
  </label>
</div>


{/* Section 2: Social Media & Online Presence */}

<div className="border-b border-slate-200 pb-4">
  <h3 className="text-2xl font-bold text-slate-900">
    2. Social Media & Online Presence
  </h3>

  <p className="mt-2 text-sm text-slate-500">
    Tell us where you share your content and what your audience loves.
  </p>
</div>

<div>
  <h4 className="mb-4 text-lg font-semibold text-slate-900">
    Primary Social Media Handles
  </h4>

  <div className="grid gap-6 md:grid-cols-2">

    <div>
      <label className="mb-2 block font-medium">
        Instagram Handle
      </label>

      <input
        type="text"
        name="instagram"
        placeholder="@username"
        value={formData.instagram}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

    <div>
      <label className="mb-2 block font-medium">
        TikTok Handle
      </label>

      <input
        type="text"
        name="tiktok"
        placeholder="@username"
        value={formData.tiktok}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

    <div>
      <label className="mb-2 block font-medium">
        Facebook Page / Profile
      </label>

      <input
        type="text"
        name="facebook"
        placeholder="Profile URL or Name"
        value={formData.facebook}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

    <div>
      <label className="mb-2 block font-medium">
        YouTube Channel
        <span className="ml-2 text-sm font-normal text-slate-400">
          (Optional)
        </span>
      </label>

      <input
        type="text"
        name="youtube"
        placeholder="Channel URL or Name"
        value={formData.youtube}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

  </div>

  <div className="mt-6">
    <label className="mb-2 block font-medium">
      Blog / Website
      <span className="ml-2 text-sm font-normal text-slate-400">
        (Optional)
      </span>
    </label>

    <input
      type="text"
      name="website"
      placeholder="https://"
      value={formData.website}
      onChange={handleChange}
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />
  </div>
</div>

<div>
  <label className="mb-2 block font-medium">
    Which platform are you most active on? *
  </label>

  <select
    name="primaryPlatform"
    value={formData.primaryPlatform}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
  >
    <option value="">Select a platform...</option>
    <option value="Instagram">Instagram</option>
    <option value="TikTok">TikTok</option>
    <option value="Facebook">Facebook</option>
    <option value="YouTube / Blog">YouTube / Blog</option>
  </select>
</div>

<div>
  <label className="mb-4 block font-medium">
    What type of content do you primarily post? *
  </label>

  <div className="grid gap-3 sm:grid-cols-2">

    {[
      "Travel Vlogs & Guides",
      "Lifestyle & Fashion",
      "Group Trips & Events",
      "Food & Dining",
      "Budget / Luxury Travel Tips",
    ].map((contentType) => (
      <label
        key={contentType}
        className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-[var(--primary)]"
      >
        <input
          type="checkbox"
          name="contentTypes"
          value={contentType}
          checked={formData.contentTypes.includes(contentType)}
          onChange={(e) => {
            const { value, checked } = e.target;

            setFormData((prev) => ({
              ...prev,
              contentTypes: checked
                ? [...prev.contentTypes, value]
                : prev.contentTypes.filter(
                    (type) => type !== value
                  ),
            }));
          }}
          className="mt-1 h-5 w-5 rounded border-slate-300 accent-[var(--primary)]"
        />

        <span className="text-slate-700">
          {contentType}
        </span>
      </label>
    ))}

  </div>


</div>

{/* Section 3: Brand Alignment & Experience */}

<div className="border-b border-slate-200 pb-4">
  <h3 className="text-2xl font-bold text-slate-900">
    3. Brand Alignment & Experience
  </h3>

  <p className="mt-2 text-sm text-slate-500">
    Help us understand your experience, personality, and connection to
    travel.
  </p>
</div>

<div>
  <label className="mb-2 block font-medium">
    Why do you want to represent Sociable Travels? *
  </label>

  <textarea
    name="whyAmbassador"
    rows={6}
    value={formData.whyAmbassador}
    onChange={handleChange}
    required
    placeholder="Tell us why you'd like to represent Sociable Travels..."
    className="w-full rounded-xl border border-slate-300 px-4 py-3"
  />
</div>

<div>
  <label className="mb-2 block font-medium">
    How would you describe your personal brand and travel style? *
  </label>

  <textarea
    name="travelStyle"
    rows={5}
    value={formData.travelStyle}
    onChange={handleChange}
    required
    placeholder="For example: luxury explorer, group trip coordinator, solo adventurer, cruise lover..."
    className="w-full rounded-xl border border-slate-300 px-4 py-3"
  />
</div>

<div>
  <label className="mb-2 block font-medium">
    Have you worked as a brand ambassador or creator for other travel,
    lifestyle, or hospitality brands before? *
  </label>

  <div className="grid gap-3 sm:grid-cols-2">

    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
      <input
        type="radio"
        name="previousAmbassadorExperience"
        value="Yes"
        checked={formData.previousAmbassadorExperience === "Yes"}
        onChange={handleChange}
        required
        className="mt-1 h-5 w-5 accent-[var(--primary)]"
      />

      <span className="text-slate-700">
        Yes
      </span>
    </label>

    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
      <input
        type="radio"
        name="previousAmbassadorExperience"
        value="No"
        checked={formData.previousAmbassadorExperience === "No"}
        onChange={handleChange}
        required
        className="mt-1 h-5 w-5 accent-[var(--primary)]"
      />

      <span className="text-slate-700">
        No — This will be my first ambassador role!
      </span>
    </label>

  </div>
</div>

<div>
  <label className="mb-2 block font-medium">
    If yes, please list the brand names
  </label>

  <input
    type="text"
    name="previousBrandNames"
    value={formData.previousBrandNames}
    onChange={handleChange}
    placeholder="List any travel, lifestyle, or hospitality brands..."
    className="w-full rounded-xl border border-slate-300 px-4 py-3"
  />
</div>

<div>
  <label className="mb-2 block font-medium">
    How do you plan to promote Sociable Travels to your audience? *
  </label>

  <textarea
    name="promotionPlan"
    rows={5}
    value={formData.promotionPlan}
    onChange={handleChange}
    required
    placeholder="For example: sharing trip deals, posting vlog content, hosting group trips, posting stories..."
    className="w-full rounded-xl border border-slate-300 px-4 py-3"
  />
</div>
{/* Section 4: Availability & Expectations */}

<div className="border-b border-slate-200 pb-4">
  <h3 className="text-2xl font-bold text-slate-900">
    4. Availability & Expectations
  </h3>

  <p className="mt-2 text-sm text-slate-500">
    Tell us how you see yourself participating as a Sociable Travels
    Brand Ambassador.
  </p>
</div>

<div>
  <label className="mb-2 block font-medium">
    Are you comfortable creating video content (Reels, TikToks, Shorts)
    featuring Sociable Travels promotions or group trips? *
  </label>

  <div className="space-y-3">

    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
      <input
        type="radio"
        name="videoContentComfort"
        value="Yes, absolutely"
        checked={formData.videoContentComfort === "Yes, absolutely"}
        onChange={handleChange}
        required
        className="mt-1 h-5 w-5 accent-[var(--primary)]"
      />

      <span className="text-slate-700">
        Yes, absolutely
      </span>
    </label>

    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
      <input
        type="radio"
        name="videoContentComfort"
        value="Yes, but I prefer photo content / static posts"
        checked={
          formData.videoContentComfort ===
          "Yes, but I prefer photo content / static posts"
        }
        onChange={handleChange}
        className="mt-1 h-5 w-5 accent-[var(--primary)]"
      />

      <span className="text-slate-700">
        Yes, but I prefer photo content / static posts
      </span>
    </label>

    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
      <input
        type="radio"
        name="videoContentComfort"
        value="No"
        checked={formData.videoContentComfort === "No"}
        onChange={handleChange}
        className="mt-1 h-5 w-5 accent-[var(--primary)]"
      />

      <span className="text-slate-700">
        No
      </span>
    </label>

  </div>
</div>

<div>
  <label className="mb-2 block font-medium">
    Are you planning any upcoming personal travel or group trips in the
    next 6–12 months?
  </label>

  <textarea
    name="upcomingTravel"
    rows={5}
    value={formData.upcomingTravel}
    onChange={handleChange}
    placeholder="If yes, briefly share your upcoming destinations or group trips..."
    className="w-full rounded-xl border border-slate-300 px-4 py-3"
  />
</div>
{/* Section 5: Next Steps & Agreement */}

<div className="border-b border-slate-200 pb-4">
  <h3 className="text-2xl font-bold text-slate-900">
    5. Next Steps & Agreement
  </h3>

  <p className="mt-2 text-sm text-slate-500">
    Almost there! Just a couple of final questions.
  </p>
</div>

<div>
  <label className="mb-2 block font-medium">
    How did you hear about the Sociable Travels Brand Ambassador Program? *
  </label>

  <input
    type="text"
    name="howHeard"
    value={formData.howHeard}
    onChange={handleChange}
    required
    placeholder="Tell us how you heard about the program..."
    className="w-full rounded-xl border border-slate-300 px-4 py-3"
  />
</div>


        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <label className="flex items-start gap-4">
            <input
              type="checkbox"
              name="ambassadorAcknowledgment"
              checked={formData.ambassadorAcknowledgment}
              onChange={handleChange}
              required
              className="mt-1 h-5 w-5 rounded border-slate-300 accent-[var(--primary)]"
            />

            <span className="leading-7 text-slate-700">
              I understand that completing this application does not guarantee
              acceptance into the{" "}
              <strong>Sociable Travels Brand Ambassador Program</strong>. If
              selected, I will receive the full Ambassador Agreement outlining
              perks, commission structures, and guidelines.
            </span>
          </label>
        </div>

        {/* Submit Application */}
        <div className="border-t border-slate-200 pt-8">
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            Submit Ambassador Application
          </button>

          <p className="mt-4 text-center text-sm text-slate-500">
            Applications are reviewed individually. Selected applicants will
            be contacted by the Sociable Travels team.
          </p>
        </div>
      </form>
    </div>
  </section>
  );
}