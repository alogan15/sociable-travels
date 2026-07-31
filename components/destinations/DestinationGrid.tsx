"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import DestinationCard from "./DestinationCard";
import { destinations } from "./destination-data";

export default function DestinationGrid() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "Beach",
    "Luxury",
    "Cruise",
    "Family",
    "Adventure",
    "City",
    "Romance",
  ];

  const filteredDestinations =
    selectedFilter === "All"
      ? destinations
      : destinations.filter((destination) =>
          destination.tags.includes(selectedFilter)
        );

  return (
    <section id="destinations" className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Popular Destinations"
          title="Find Your Perfect Getaway"
          description="Whether you're looking for tropical beaches, vibrant cities, luxurious resorts, or unforgettable adventures, Sociable Travels is here to help you discover your next favorite destination."
        />

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
              selectedFilter === filter
                ? "border-[#39D5E8] bg-[#39D5E8] text-white shadow-md"
                : "border-slate-200 bg-white text-slate-700 hover:border-[#39D5E8] hover:bg-[#39D5E8]/10 hover:text-[#0B3C5D]"
            }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Destination Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}