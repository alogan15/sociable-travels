import Link from "next/link";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase/server";
import InquiryStatusActions from "@/components/admin/InquiryStatusActions";
import { isAuthorizedAdmin } from "@/lib/supabase/admin-auth";

export default async function InquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const authorized = await isAuthorizedAdmin();

  if (!authorized) {
    redirect("/admin/login");
  }

  const { id } = await params;

  const { data: inquiry, error } = await supabase
    .from("travel_inquiries")
    .select(
      "id, first_name, last_name, email, phone, destination, travel_dates, travelers, budget, trip_type, preferred_contact, message, status, created_at",
    )
    .eq("id", id)
    .single();

  if (error || !inquiry) {
    console.error("Error loading travel inquiry:", error);

    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/admin/inquiries"
            className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
          >
            ← Back to Inquiries
          </Link>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              Inquiry Not Found
            </h1>

            <p className="mt-2 text-slate-500">
              We couldn't find that travel inquiry.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const submittedDate = new Date(inquiry.created_at).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <Link
          href="/admin/inquiries"
          className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          ← Back to Inquiries
        </Link>

        {/* Header */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#39D5E8]">
              Travel Inquiry
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              {inquiry.first_name} {inquiry.last_name}
            </h1>

            <p className="mt-2 text-slate-500">Submitted {submittedDate}</p>
          </div>

          <span
            className={`w-fit rounded-full px-4 py-2 text-sm font-semibold ${
              inquiry.status === "New"
                ? "bg-cyan-100 text-cyan-700"
                : inquiry.status === "Contacted"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-100 text-slate-600"
            }`}
          >
            {inquiry.status}
          </span>
        </div>

        <div className="mt-8 space-y-6">
          {/* Contact Information */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-xl font-bold text-slate-900">
                Contact Information
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-3">
                <div className="min-w-0">
                  <p className="text-sm text-slate-400">Email</p>

                  <p className="mt-1 break-words font-semibold text-slate-800">
                    {inquiry.email}
                  </p>
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-400">Phone</p>

                  <p className="mt-1 break-words font-semibold text-slate-800">
                    {inquiry.phone || "Not provided"}
                  </p>
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-400">Preferred Contact</p>

                  <p className="mt-1 break-words font-semibold text-slate-800">
                    {inquiry.preferred_contact || "Not provided"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trip Details */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-xl font-bold text-slate-900">Trip Details</h2>

              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="min-w-0">
                  <p className="text-sm text-slate-400">Destination</p>

                  <p className="mt-1 break-words font-semibold text-slate-800">
                    {inquiry.destination || "Not provided"}
                  </p>
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-400">Travel Dates</p>

                  <p className="mt-1 break-words font-semibold text-slate-800">
                    {inquiry.travel_dates || "Not provided"}
                  </p>
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-400">Travelers</p>

                  <p className="mt-1 break-words font-semibold text-slate-800">
                    {inquiry.travelers || "Not provided"}
                  </p>
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-400">Trip Type</p>

                  <p className="mt-1 break-words font-semibold text-slate-800">
                    {inquiry.trip_type || "Not provided"}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-slate-400">Estimated Budget</p>

                <p className="mt-1 font-semibold text-slate-800">
                  {inquiry.budget || "Not provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Message */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-xl font-bold text-slate-900">
                Traveler&apos;s Message
              </h2>

              <p className="mt-6 whitespace-pre-line leading-7 text-slate-600">
                {inquiry.message || "No message provided."}
              </p>
            </div>
          </section>

          {/* Actions */}
          <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="px-4 sm:px-0">
              <h2 className="text-xl font-bold text-slate-900">
                Inquiry Status
              </h2>

              <InquiryStatusActions
                inquiryId={inquiry.id}
                currentStatus={inquiry.status}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
