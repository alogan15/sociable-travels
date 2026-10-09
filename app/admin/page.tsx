import Link from "next/link";
import { supabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { isAuthorizedAdmin } from "@/lib/supabase/admin-auth";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminPage() {
  const authorized = await isAuthorizedAdmin();

  if (!authorized) {
    redirect("/admin/login");
  }

  const [
    { data: inquiries, error: inquiriesError },
    { data: ambassadors, error: ambassadorsError },
    { data: businessBuilders, error: businessBuildersError },
  ] = await Promise.all([
    supabase.from("travel_inquiries").select("id, status"),

    supabase.from("ambassador_applications").select("id, status"),

    supabase.from("coaching_applications").select("id, status"),
  ]);

  if (inquiriesError || ambassadorsError || businessBuildersError) {
    console.error("Admin dashboard error:", {
      inquiriesError,
      ambassadorsError,
      businessBuildersError,
    });

    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-red-200 bg-white p-10 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              Unable to Load Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              There was a problem loading the admin dashboard data.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const inquiryCount = inquiries?.length ?? 0;
  const newInquiryCount =
    inquiries?.filter((item) => item.status === "New").length ?? 0;

  const ambassadorCount = ambassadors?.length ?? 0;
  const newAmbassadorCount =
    ambassadors?.filter((item) => item.status === "New").length ?? 0;

  const businessBuilderCount = businessBuilders?.length ?? 0;
  const newBusinessBuilderCount =
    businessBuilders?.filter((item) => item.status === "New").length ?? 0;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#39D5E8]">
              Sociable Travels
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Admin Dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-slate-600">
              Manage Travel Inquiries, Ambassador Applications, and Business
              Builders Applications from one place.
            </p>
          </div>

          <LogoutButton />
        </div>

        {/* Dashboard Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Travel Inquiries */}
          <DashboardCard
            eyebrow="Travel"
            title="Travel Inquiries"
            description="Review and manage travel requests submitted through the website."
            total={inquiryCount}
            newCount={newInquiryCount}
            href="/admin/inquiries"
            buttonLabel="View Inquiries"
          />

          {/* Ambassadors */}
          <DashboardCard
            eyebrow="Community"
            title="Ambassador Applicants"
            description="Review applicants interested in becoming a Travel Ambassador."
            total={ambassadorCount}
            newCount={newAmbassadorCount}
            href="/admin/ambassadors"
            buttonLabel="View Applications"
          />

          {/* Business Builders */}
          <DashboardCard
            eyebrow="Coaching"
            title="Business Builders"
            description="Review applications for the Sociable Travelers Business Builders program."
            total={businessBuilderCount}
            newCount={newBusinessBuilderCount}
            href="/admin/business-builders"
            buttonLabel="View Applications"
          />
        </div>
      </div>
    </main>
  );
}

function DashboardCard({
  eyebrow,
  title,
  description,
  total,
  newCount,
  href,
  buttonLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  total: number;
  newCount: number;
  href: string;
  buttonLabel: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#39D5E8]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-slate-900">{title}</h2>

      <p className="mt-3 min-h-[72px] leading-6 text-slate-600">
        {description}
      </p>

      <div className="mt-8 flex items-end justify-between border-t border-slate-100 pt-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Total
          </p>

          <p className="mt-1 text-3xl font-bold text-slate-900">{total}</p>
        </div>

        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            New
          </p>

          <p className="mt-1 text-3xl font-bold text-slate-900">{newCount}</p>
        </div>
      </div>

      <Link
        href={href}
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
