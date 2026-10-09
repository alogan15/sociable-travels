import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { supabase } from "@/lib/supabase/server";
import AmbassadorStatusActions from "@/components/admin/AmbassadorStatusActions";
import { isAuthorizedAdmin } from "@/lib/supabase/admin-auth";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function AmbassadorDetailPage({ params }: PageProps) {
  const authorized = await isAuthorizedAdmin();

  if (!authorized) {
    redirect("/admin/login");
  }

  const { id } = await params;

  const { data: application, error } = await supabase
    .from("ambassador_applications")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !application) {
    console.error("Error loading ambassador application:", error);
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
          href="/admin/ambassadors"
          className="mb-8 inline-flex items-center text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          ← Back to Ambassador Applications
        </Link>

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#39D5E8]">
              Sociable Travels Ambassador
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              {application.first_name} {application.last_name}
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

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <InfoItem label="Email" value={application.email} />

                <InfoItem label="Phone" value={application.phone} />

                <InfoItem label="City" value={application.city} />

                <InfoItem label="State" value={application.state} />
              </div>
            </div>
          </section>

          {/* Social & Platform */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Social & Platform
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <InfoItem
                  label="Primary Platform"
                  value={application.primary_platform}
                />

                <InfoItem label="Instagram" value={application.instagram} />

                <InfoItem label="TikTok" value={application.tiktok} />

                <InfoItem label="Facebook" value={application.facebook} />

                <InfoItem label="YouTube" value={application.youtube} />

                <InfoItem label="Website" value={application.website} />
              </div>
            </div>
          </section>

          {/* Travel & Content */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Travel & Content
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <InfoItem
                  label="Travel Style"
                  value={application.travel_style}
                />

                <InfoItem
                  label="Content Types"
                  value={formatValue(application.content_types)}
                />

                <InfoItem
                  label="Video Content Comfort"
                  value={application.video_content_comfort}
                />

                <InfoItem
                  label="Upcoming Travel"
                  value={application.upcoming_travel}
                />
              </div>
            </div>
          </section>

          {/* Ambassador Experience */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Ambassador Experience
              </h2>

              <div className="mt-8 space-y-8">
                <InfoItem
                  label="Previous Ambassador Experience"
                  value={application.previous_ambassador_experience}
                />

                <InfoItem
                  label="Previous Brand Names"
                  value={application.previous_brand_names}
                />

                <InfoItem
                  label="Promotion Plan"
                  value={application.promotion_plan}
                />

                <InfoItem
                  label="Why They Want to Become an Ambassador"
                  value={application.why_ambassador}
                />

                <InfoItem
                  label="How They Heard About Sociable Travels"
                  value={application.how_heard}
                />
              </div>
            </div>
          </section>

          {/* Agreement & Verification */}
          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-12 py-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Agreement & Verification
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-3">
                <InfoItem
                  label="Age Verified"
                  value={formatValue(application.age_verified)}
                />

                <InfoItem
                  label="Agreement Accepted"
                  value={formatValue(application.agreement_accepted)}
                />

                <InfoItem
                  label="Ambassador Acknowledgment"
                  value={formatValue(application.ambassador_acknowledgment)}
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

              <AmbassadorStatusActions
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
