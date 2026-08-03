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
      destination,
      travelDates,
      travelers,
      budget,
      tripType,
      preferredContact,
      message,
    } = body;

    // Required field validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabase
      .from("travel_inquiries")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        destination,
        travel_dates: travelDates,
        travelers,
        budget,
        trip_type: tripType,
        preferred_contact: preferredContact,
        message,
        status: "New",
      });

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to submit your inquiry.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: true,
    });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}