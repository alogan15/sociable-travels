"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type AmbassadorFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  favoriteDestination: string;
  travelStyle: string;
  travelFrequency: string;
  whyJoin: string;
  agreed: boolean;
};

const initialForm: AmbassadorFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  instagram: "",
  tiktok: "",
  facebook: "",
  favoriteDestination: "",
  travelStyle: "",
  travelFrequency: "",
  whyJoin: "",
  agreed: false,
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
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
      Email *
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
      Phone *
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
      State *
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

<div className="grid gap-6 md:grid-cols-3">

  <div>
    <label className="mb-2 block font-medium">
      Instagram
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
      TikTok
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
      Facebook
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

</div>

<div className="grid gap-6 md:grid-cols-3">

  {/* Favorite Destination */}

  <div>
    <label className="mb-2 block font-medium">
      Favorite Destination
    </label>

    <select
      name="favoriteDestination"
      value={formData.favoriteDestination}
      onChange={handleChange}
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
    >
      <option value="">Select...</option>
      <option>Caribbean</option>
      <option>Europe</option>
      <option>Mexico</option>
      <option>Cruises</option>
      <option>Asia</option>
      <option>Africa</option>
      <option>South America</option>
      <option>United States</option>
      <option>Other</option>
    </select>
  </div>

  {/* Travel Style */}

  <div>
    <label className="mb-2 block font-medium">
      Travel Style
    </label>

    <select
      name="travelStyle"
      value={formData.travelStyle}
      onChange={handleChange}
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
    >
      <option value="">Select...</option>
      <option>Luxury</option>
      <option>Adventure</option>
      <option>Family</option>
      <option>Group</option>
      <option>Solo</option>
      <option>Couples</option>
      <option>Cruises</option>
    </select>
  </div>

  {/* Travel Frequency */}

  <div>
    <label className="mb-2 block font-medium">
      Trips Per Year
    </label>

    <select
      name="travelFrequency"
      value={formData.travelFrequency}
      onChange={handleChange}
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
    >
      <option value="">Select...</option>
      <option>1–2 Trips</option>
      <option>3–5 Trips</option>
      <option>6+ Trips</option>
    </select>
  </div>

</div>

<div>
  <label className="mb-2 block font-medium">
    Why do you want to become a Sociable Travels Brand Ambassador? *
  </label>

  <textarea
    name="whyJoin"
    rows={6}
    value={formData.whyJoin}
    onChange={handleChange}
    required
    placeholder="Tell us what inspires you to travel, why you'd like to represent Sociable Travels, and what makes you a great fit for our community..."
    className="w-full rounded-xl border border-slate-300 px-4 py-3"
  />
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
  <label className="flex items-start gap-4">
    <input
      type="checkbox"
      name="agreed"
      checked={formData.agreed}
      onChange={handleChange}
      required
      className="mt-1 h-5 w-5 rounded border-slate-300 accent-[var(--primary)]"
    />

    <span className="leading-7 text-slate-700">
      I certify that the information provided is accurate. If selected, I
      agree to represent <strong>Sociable Travels</strong> professionally,
      positively, and in accordance with the values of the brand.
    </span>
  </label>
</div>

<div className="border-t border-slate-200 pt-8">

  <button
    type="submit"
    className="w-full rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-xl"
  >
    Submit Ambassador Application
  </button>

  <p className="mt-4 text-center text-sm text-slate-500">
    Applications are reviewed individually. Selected applicants will be
    contacted by the Sociable Travels team.
  </p>

</div>
      </form>
    </div>
  </section>
);
}