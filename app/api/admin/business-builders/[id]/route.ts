import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";
import { isAuthorizedAdmin } from "@/lib/supabase/admin-auth";

const allowedStatuses = ["New", "Contacted", "Approved", "Closed"];

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
        { error: "Invalid application status" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("coaching_applications")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error(
        "Error updating Business Builders application:",
        error
      );

      return NextResponse.json(
        { error: "Unable to update application status" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      application: data,
    });
  } catch (error) {
    console.error(
      "Unexpected Business Builders update error:",
      error
    );

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}