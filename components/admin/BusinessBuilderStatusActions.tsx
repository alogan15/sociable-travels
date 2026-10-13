"use client";

import { useState } from "react";

type Props = {
  applicationId: string;
  currentStatus: string;
};

const statuses = ["New", "Contacted", "Approved", "Closed"];

export default function BusinessBuilderStatusActions({
  applicationId,
  currentStatus,
}: Props) {
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function updateStatus(newStatus: string) {
    setSaving(true);
    setError("");

    try {
      const response = await fetch(
        `/api/admin/business-builders/${applicationId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to update application status."
        );
      }

      setStatus(newStatus);
    } catch (error) {
      console.error("Status update error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to update application status."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-3">
        {statuses.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => updateStatus(option)}
            disabled={saving || option === status}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
              option === status
                ? "cursor-default bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            } ${
              saving ? "cursor-wait opacity-60" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {saving && (
        <p className="mt-3 text-sm text-slate-500">
          Updating status...
        </p>
      )}

      {error && (
        <p className="mt-3 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}