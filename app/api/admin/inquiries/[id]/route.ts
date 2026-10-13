import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";
import { isAuthorizedAdmin } from "@/lib/supabase/admin-auth";

const allowedStatuses = ["New", "Contacted", "Closed"];

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Verify the signed-in user is an approved admin.
    const authorized = await isAuthorizedAdmin();

    if (!authorized) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("travel_inquiries")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating inquiry:", error);

      return NextResponse.json(
        { error: "Unable to update inquiry" },
        { status: 500 }
      );
    }

    return NextResponse.json({ inquiry: data });
  } catch (error) {
    console.error("Unexpected inquiry update error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}