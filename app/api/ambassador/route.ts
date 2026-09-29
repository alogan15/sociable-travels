
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      city,
      state,
      ageVerified,
      instagram,
      tiktok,
      facebook,
      youtube,
      website,
      primaryPlatform,
      contentTypes,
      whyAmbassador,
      travelStyle,
      previousAmbassadorExperience,
      previousBrandNames,
      promotionPlan,
      videoContentComfort,
      upcomingTravel,
      howHeard,
      ambassadorAcknowledgment,
    } = body;

    const missingFields = [
      !firstName?.trim() && "First Name",
      !lastName?.trim() && "Last Name",
      !email?.trim() && "Email",
      !phone?.trim() && "Phone",
      !city?.trim() && "City",
      !state?.trim() && "State / Region",
      ageVerified !== true && "Age Verification",
      !whyAmbassador?.trim() && "Why You Want to Represent Sociable Travels",
      ambassadorAcknowledgment !== true && "Ambassador Acknowledgment",
    ].filter(Boolean);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    if (!Array.isArray(contentTypes)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid content types submitted.",
        },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("ambassador_applications")
      .insert({
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        city: city.trim(),
        state: state.trim(),
        age_verified: ageVerified,
        instagram: instagram || null,
        tiktok: tiktok || null,
        facebook: facebook || null,
        youtube: youtube || null,
        website: website || null,
        primary_platform: primaryPlatform || null,
        content_types: contentTypes,
        why_ambassador: whyAmbassador.trim(),
        travel_style: travelStyle || null,
        previous_ambassador_experience:
          previousAmbassadorExperience || null,
        previous_brand_names: previousBrandNames || null,
        promotion_plan: promotionPlan || null,
        video_content_comfort: videoContentComfort || null,
        upcoming_travel: upcomingTravel || null,
        how_heard: howHeard || null,
        ambassador_acknowledgment: ambassadorAcknowledgment,
        status: "New",
      });

    if (error) {
      console.error("Supabase Ambassador Error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to submit your ambassador application.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your ambassador application has been received. Thank you for applying!",
    });
  } catch (error) {
    console.error("Ambassador API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}