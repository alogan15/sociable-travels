import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";

const allowedStatuses = ["New", "Contacted", "Approved", "Closed"];

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
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
      .from("ambassador_applications")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating ambassador application:", error);

      return NextResponse.json(
        { error: "Unable to update application status" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      application: data,
    });
  } catch (error) {
    console.error("Unexpected ambassador update error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}