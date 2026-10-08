import Link from "next/link";
import { supabase } from "@/lib/supabase/server";

export default async function InquiriesPage() {
  const { data: inquiries, error } = await supabase
    .from("travel_inquiries")
    .select(
      "id, first_name, last_name, email, destination, travel_dates, travelers, status, created_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading travel inquiries:", error);

    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8">
            <h1 className="text-2xl font-bold text-red-800">
              Unable to Load Inquiries
            </h1>

            <p className="mt-2 text-red-700">
              There was a problem connecting to the travel inquiry database.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const newInquiryCount =
    inquiries?.filter((inquiry) => inquiry.status === "New").length ?? 0;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/admin"
          className="mb-8 inline-flex items-center text-sm font-semibold text-slate-600 transition hover:text-slate-900"        >
          ← Back to Admin Dashboard
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#39D5E8]">
            Sociable Travels Admin
          </p>

          <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Travel Inquiries
              </h1>

              <p className="mt-2 text-slate-600">
                Review and manage travel requests submitted through the
                website.
              </p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-3 shadow-sm">
              <p className="text-sm text-slate-500">New Inquiries</p>

              <p className="text-2xl font-bold text-slate-900">
                {newInquiryCount}
              </p>
            </div>
          </div>
        </div>

        {/* Inquiry List */}
        <div className="space-y-4">
          {inquiries && inquiries.length > 0 ? (
            inquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Customer */}
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold text-slate-900">
                      {inquiry.first_name} {inquiry.last_name}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {inquiry.email}
                    </p>
                  </div>

                  {/* Trip Information */}
                  <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[500px]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Destination
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {inquiry.destination || "Not provided"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Travel Dates
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {inquiry.travel_dates || "Not provided"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Travelers
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {inquiry.travelers || "Not provided"}
                      </p>
                    </div>
                  </div>

           {/* Action */}
            <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  inquiry.status === "New"
                    ? "bg-cyan-100 text-cyan-700"
                    : inquiry.status === "Contacted"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-600"
                }`}
              >
                {inquiry.status}
              </span>

              <Link
                href={`/admin/inquiries/${inquiry.id}`}
                className="rounded-xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View Inquiry
              </Link>
            </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                No inquiries yet
              </h2>

              <p className="mt-2 text-slate-500">
                New travel inquiries submitted through the website will
                appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}