"use client";

import { useState } from "react";

type InquiryStatusActionsProps = {
  inquiryId: string;
  currentStatus: string;
};

export default function InquiryStatusActions({
  inquiryId,
  currentStatus,
}: InquiryStatusActionsProps) {
  const [status, setStatus] = useState(currentStatus);
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState("");

  async function updateStatus(newStatus: string) {
    setIsUpdating(true);
    setMessage("");

    try {
      const response = await fetch(`/api/admin/inquiries/${inquiryId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to update status.");
      }

      setStatus(newStatus);
      setMessage("Status updated successfully.");
    } catch (error) {
      console.error("Status update error:", error);
      setMessage("Unable to update status. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-3">
        {status !== "Contacted" && status !== "Closed" && (
          <button
            type="button"
            onClick={() => updateStatus("Contacted")}
            disabled={isUpdating}
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isUpdating ? "Updating..." : "Mark as Contacted"}
          </button>
        )}

        {status !== "Closed" && (
          <button
            type="button"
            onClick={() => updateStatus("Closed")}
            disabled={isUpdating}
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Close Inquiry
          </button>
        )}

        {status === "Closed" && (
          <button
            type="button"
            onClick={() => updateStatus("New")}
            disabled={isUpdating}
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Reopen Inquiry
          </button>
        )}
      </div>

      {message && (
        <p className="mt-3 text-sm font-medium text-slate-500">
          {message}
        </p>
      )}
    </div>
  );
}