"use client";

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

export default function DestinationFilters() {
  return (
    <section className="border-b border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6">
        {filters.map((filter, index) => (
          <button
            key={filter}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
              index === 0
                ? "border-[#39D5E8] bg-[#39D5E8] text-white shadow-md"
                : "border-slate-200 bg-white text-slate-700 hover:border-[#39D5E8] hover:bg-[#39D5E8]/10 hover:text-[#0B3C5D]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}