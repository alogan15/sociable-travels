import Link from "next/link";
import { supabase } from "@/lib/supabase/server";

export default async function BusinessBuildersPage() {
  const { data: applications, error } = await supabase
    .from("coaching_applications")
    .select(
      "id, full_name, business_name, email, state, license_or_host, niche, primary_goal, status, created_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading Business Builders applications:", error);

    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-red-200 bg-white p-10 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              Unable to Load Applications
            </h1>

            <p className="mt-2 text-slate-500">
              There was a problem loading Business Builders applications.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const newApplicationCount =
    applications?.filter(
      (application) => application.status === "New"
    ).length ?? 0;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <Link
          href="/admin"
          className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          ← Back to Admin Dashboard
        </Link>

        {/* Header */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#39D5E8]">
              Sociable Travelers
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Business Builders
            </h1>

            <p className="mt-3 text-slate-600">
              Review Business Builders applications and manage applicant
              status.
            </p>
          </div>

          <div className="w-fit rounded-2xl bg-white px-5 py-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              New Applications
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {newApplicationCount}
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="mt-8 space-y-4">
          {applications?.length ? (
            applications.map((application) => (
              <div
                key={application.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  {/* Applicant */}
                  <div className="min-w-0 lg:w-[300px] lg:shrink-0">
                    <h2 className="truncate text-lg font-bold text-slate-900">
                      {application.full_name}
                    </h2>

                    <p className="mt-1 truncate text-sm text-slate-500">
                      {application.business_name}
                    </p>

                    <p className="mt-2 truncate text-sm text-slate-500">
                      {application.email}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="grid flex-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        State
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {application.state || "Not provided"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        License / Host
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {application.license_or_host || "Not provided"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Niche
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {application.niche || "Not provided"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Goal
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {application.primary_goal || "Not provided"}
                      </p>
                    </div>
                  </div>

                  {/* Status + View */}
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
                  href={`/admin/business-builders/${application.id}`}
                  className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
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
                No Applications Yet
              </h2>

              <p className="mt-2 text-slate-500">
                Business Builders applications will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}