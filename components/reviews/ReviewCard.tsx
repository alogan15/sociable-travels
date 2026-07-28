"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Star } from "lucide-react";
import { Review } from "./reviews-data";

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl">
      {/* Stars */}
      <div className="mb-6 flex items-center gap-1">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="border-l-4 border-cyan-500 pl-5 text-lg italic leading-8 text-slate-700">
        "{review.quote}"
      </blockquote>

      {/* Expanded Review */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "mt-6 max-h-[600px]" : "max-h-0"
        }`}
      >
        <p className="leading-8 text-slate-600">
          {review.review}
        </p>
      </div>

      {/* Read More Button */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
      >
        {expanded ? (
          <>
            Show Less
            <ChevronUp size={18} />
          </>
        ) : (
          <>
            Read Full Review
            <ChevronDown size={18} />
          </>
        )}
      </button>

      {/* Divider */}
      <div className="my-8 border-t border-slate-200" />

      {/* Reviewer */}
      <div>
        <h3 className="text-xl font-semibold text-slate-900">
          {review.name}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-slate-500">
          <MapPin
            size={16}
            className="text-cyan-500"
          />

          <span>{review.destination}</span>
        </div>
      </div>
    </article>
  );
}