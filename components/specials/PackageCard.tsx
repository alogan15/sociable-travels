"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  MapPin,
  Clock,
  ArrowRight,
  X,
  CalendarDays,
  CircleDollarSign,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import type { TravelPackage } from "./packages-data";

type PackageCardProps = {
  packageItem: TravelPackage;
};

export default function PackageCard({ packageItem }: PackageCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {/* Package Card */}
      <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">        
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={packageItem.image}
            alt={packageItem.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Badge */}
          <span className="absolute left-5 top-5 rounded-full bg-pink-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
            {packageItem.badge}
          </span>

          {/* Price */}
          <div className="absolute bottom-5 right-5 rounded-2xl bg-white px-4 py-3 text-right shadow-lg">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Starting At
            </p>

            <p className="text-3xl font-bold leading-none text-cyan-600">
              {packageItem.startingPrice}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              per person*
            </p>
          </div>
        </div>

        {/* Content */}
          <div className="flex flex-1 flex-col p-7">
            <h3 className="text-2xl font-bold text-slate-900">
            {packageItem.title}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-slate-500">
            <MapPin size={18} />
            <span>{packageItem.location}</span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-slate-500">
            <Clock size={18} />
            <span>{packageItem.duration}</span>
          </div>

          <p className="mt-5 leading-7 text-slate-600">
            {packageItem.description}
          </p>

        {/* Buttons */}
          <div className="mt-auto flex flex-col items-center gap-4 pt-8">
            {packageItem.dates && (
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="text-sm font-semibold text-cyan-600 transition-colors hover:text-cyan-700"
            >
              View Trip Details
              <ArrowRight
                className="ml-1 inline transition-transform duration-300 group-hover:translate-x-1"
                size={16}
              />
            </button>
          )}

          <Button href="/contact" className="w-full justify-center">
            Request a Quote
          </Button>
        </div>
        </div>
      </div>

      {/* Trip Details Modal */}
      {showDetails && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="rounded-t-3xl bg-slate-900 px-6 py-8 text-white sm:px-8">
              <button
                type="button"
                onClick={() => setShowDetails(false)}
                className="absolute right-5 top-5 rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                aria-label="Close trip details"
              >
                <X size={22} />
              </button>

              <span className="inline-block rounded-full bg-pink-500 px-4 py-1 text-sm font-semibold">
                {packageItem.badge}
              </span>

              <h2 className="mt-4 pr-10 text-3xl font-bold sm:text-4xl">
                {packageItem.title}
              </h2>

              <div className="mt-4 flex items-center gap-2 text-slate-300">
                <MapPin size={18} />
                <span>{packageItem.location}</span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Trip Information */}
              <div className="grid gap-4 sm:grid-cols-2">
                {packageItem.dates && (
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-cyan-600">
                      <CalendarDays size={20} />
                      <span className="font-semibold">Travel Dates</span>
                    </div>

                    <p className="mt-2 font-medium text-slate-900">
                      {packageItem.dates}
                    </p>
                  </div>
                )}

                {packageItem.deposit && (
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-pink-500">
                      <CircleDollarSign size={20} />
                      <span className="font-semibold">Deposit</span>
                    </div>

                    <p className="mt-2 font-medium text-slate-900">
                      {packageItem.deposit}
                    </p>
                  </div>
                )}
              </div>

              {/* Pricing */}
              {packageItem.pricing && packageItem.pricing.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-slate-900">
                    Pricing
                  </h3>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {packageItem.pricing.map((price) => (
                      <div
                        key={price}
                        className="rounded-2xl border border-slate-200 p-4 text-center"
                      >
                        <p className="font-semibold text-slate-700">
                          {price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* About */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900">
                  About This Trip
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {packageItem.description}
                </p>
              </div>

              {/* What's Included */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900">
                  Your Experience Includes
                </h3>

                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-cyan-500"
                    />
                    Roundtrip airport transfers
                  </li>

                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-cyan-500"
                    />
                    Booze cruise
                  </li>

                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-cyan-500"
                    />
                    Souvenir shopping
                  </li>

                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-cyan-500"
                    />
                    5 days / 4 nights at RIU Reggae Jamaica
                  </li>

                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-cyan-500"
                    />
                    Premium liquor
                  </li>

                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-cyan-500"
                    />
                    Nightly entertainment
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button
                  href="/contact"
                  className="w-full justify-center"
                >
                  Request This Trip
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Prices and availability are subject to change. Contact
                Sociable Travels for current pricing and booking details.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}