
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      businessName,
      email,
      phone,
      state,
      licenseOrHost,
      experience,
      niche,
      agencyType,
      primaryGoal,
      supportNeeds,
      whyNow,
      commitment,
      paymentPreference,
      consultationTime,
    } = body;

    const requiredFields = [
      ["Full Name", fullName],
      ["Business Name", businessName],
      ["Email", email],
      ["Phone", phone],
      ["State", state],
      ["License or Host Agency", licenseOrHost],
      ["Experience", experience],
      ["Travel Niche", niche],
      ["Agency Type", agencyType],
      ["Primary Goal", primaryGoal],
      ["Why Now", whyNow],
      ["Commitment", commitment],
      ["Payment Preference", paymentPreference],
      ["Consultation Time", consultationTime],
    ];

    const missingFields = requiredFields
      .filter(([, value]) =>
        typeof value !== "string" || !value.trim()
      )
      .map(([label]) => label);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    if (!Array.isArray(supportNeeds) ||
        !supportNeeds.every((item) => typeof item === "string")) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide valid coaching support selections.",
        },
        { status: 400 }
      );
    }

    if (!["Yes", "No"].includes(commitment)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid commitment response.",
        },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("coaching_applications")
      .insert({
        full_name: fullName.trim(),
        business_name: businessName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        state: state.trim(),
        license_or_host: licenseOrHost.trim(),
        experience,
        niche: niche.trim(),
        agency_type: agencyType,
        primary_goal: primaryGoal.trim(),
        support_needs: supportNeeds,
        why_now: whyNow.trim(),
        commitment,
        payment_preference: paymentPreference,
        consultation_time: consultationTime,
        status: "New",
      });

    if (error) {
      console.error("Supabase Coaching Error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to submit your coaching application.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your coaching application has been received.",
    });
  } catch (error) {
    console.error("Coaching API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}