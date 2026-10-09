import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { supabase } from "@/lib/supabase/server";
import BusinessBuilderStatusActions from "@/components/admin/BusinessBuilderStatusActions";
import { isAuthorizedAdmin } from "@/lib/supabase/admin-auth";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function BusinessBuilderDetailPage({ params }: PageProps) {
  const isAdmin = await isAuthorizedAdmin();

  if (!isAdmin) {
    redirect("/admin");
  }

  const { id } = await params;

  const { data: application, error } = await supabase
    .from("coaching_applications")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !application) {
    console.error("Error loading Business Builders application:", error);
    notFound();
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const formatValue = (value: unknown) => {
    if (value === null || value === undefined || value === "") {
      return "Not provided";
    }

    if (Array.isArray(value)) {
      return value.length > 0 ? value.join(", ") : "Not provided";
    }

    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }

    return String(value);
  };

  const statusStyles: Record<string, string> = {
    New: "bg-cyan-100 text-cyan-700",
    Contacted: "bg-emerald-100 text-emerald-700",
    Approved: "bg-green-100 text-green-700",
    Closed: "bg-slate-100 text-slate-600",
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <Link
          href="/admin/business-builders"
          className="mb-8 inline-flex items-center text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          ← Back to Business Builders
        </Link>

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#39D5E8]">
              Sociable Travelers Business Builders
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              {application.full_name}
            </h1>

            <p className="mt-2 text-slate-500">
              Submitted {formatDate(application.created_at)}
            </p>
          </div>

          <span
            className={`w-fit rounded-full px-4 py-2 text-sm font-semibold ${
              statusStyles[application.status] ?? "bg-slate-100 text-slate-600"
            }`}
          >
            {application.status}
          </span>
        </div>

        <div className="space-y-6">
          {/* Contact Information */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Contact Information
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <InfoItem label="Full Name" value={application.full_name} />

                <InfoItem
                  label="Business Name"
                  value={application.business_name}
                />

                <InfoItem label="Email" value={application.email} />

                <InfoItem label="Phone" value={application.phone} />

                <InfoItem label="State" value={application.state} />
              </div>
            </div>
          </section>

          {/* Business Information */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Business Information
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <InfoItem
                  label="License / Host"
                  value={application.license_or_host}
                />

                <InfoItem label="Experience" value={application.experience} />

                <InfoItem label="Niche" value={application.niche} />

                <InfoItem label="Agency Type" value={application.agency_type} />

                <InfoItem
                  label="Primary Goal"
                  value={application.primary_goal}
                />
              </div>
            </div>
          </section>

          {/* Coaching & Support */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Coaching & Support
              </h2>

              <div className="mt-8 space-y-8">
                <InfoItem
                  label="Support Needs"
                  value={formatValue(application.support_needs)}
                />

                <InfoItem label="Why Now" value={application.why_now} />

                <InfoItem label="Commitment" value={application.commitment} />
              </div>
            </div>
          </section>

          {/* Enrollment */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Enrollment & Consultation
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <InfoItem
                  label="Payment Preference"
                  value={application.payment_preference}
                />

                <InfoItem
                  label="Consultation Time"
                  value={application.consultation_time}
                />
              </div>
            </div>
          </section>

          {/* Status */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Application Status
              </h2>

              <BusinessBuilderStatusActions
                applicationId={application.id}
                currentStatus={application.status}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-sm font-medium text-slate-400">{label}</p>

      <p className="mt-1 whitespace-pre-wrap break-words text-base font-semibold leading-relaxed text-slate-800">
        {value || "Not provided"}
      </p>
    </div>
  );
}
