import Link from "next/link";
import { supabase } from "@/lib/supabase/server";

export default async function AmbassadorsPage() {
  const { data: applications, error } = await supabase
    .from("ambassador_applications")
    .select(
      "id, first_name, last_name, email, city, state, primary_platform, travel_style, status, created_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading ambassador applications:", error);

    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8">
            <h1 className="text-2xl font-bold text-red-800">
              Unable to Load Ambassador Applications
            </h1>

            <p className="mt-2 text-red-700">
              There was a problem connecting to the ambassador application
              database.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const newApplicationCount =
    applications?.filter((application) => application.status === "New")
      .length ?? 0;

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
                Ambassador Applications
              </h1>

              <p className="mt-2 text-slate-600">
                Review and manage applications submitted to become a Sociable
                Travels Ambassador.
              </p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-3 shadow-sm">
              <p className="text-sm text-slate-500">New Applications</p>

              <p className="text-2xl font-bold text-slate-900">
                {newApplicationCount}
              </p>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="space-y-4">
          {applications && applications.length > 0 ? (
            applications.map((application) => (
              <div
                key={application.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
               {/* Applicant */}
                  <div className="min-w-0 lg:w-[300px] lg:shrink-0">
                    <h2 className="text-xl font-bold text-slate-900">
                      {application.first_name} {application.last_name}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {application.email}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {application.city}, {application.state}
                    </p>
                  </div>

                  {/* Application Summary */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:min-w-[420px]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Primary Platform
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {application.primary_platform || "Not provided"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Travel Style
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {application.travel_style || "Not provided"}
                      </p>
                    </div>
                  </div>

                 {/* Action */}
                  <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        application.status === "New"
                          ? "bg-cyan-100 text-cyan-700"
                          : application.status === "Contacted"
                            ? "bg-emerald-100 text-emerald-700"
                            : application.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {application.status}
                    </span>

                    <Link
                      href={`/admin/ambassadors/${application.id}`}
                      className="rounded-xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      View Application
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                No ambassador applications yet
              </h2>

              <p className="mt-2 text-slate-500">
                New ambassador applications submitted through the website will
                appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}