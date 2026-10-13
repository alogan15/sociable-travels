import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          supabaseResponse = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  const {
  data: { user },
  error,
} = await supabase.auth.getUser();


const pathname = request.nextUrl.pathname;

const isPublicAuthPage =
  pathname === "/admin/login" ||
  pathname === "/admin/forgot-password" ||
  pathname === "/admin/reset-password";

  const allowedEmails = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  const isAdmin =
    !!user?.email &&
    allowedEmails.includes(user.email.toLowerCase());

// Allow authentication and password-recovery pages to load.
if (isPublicAuthPage) {
  return supabaseResponse;
}

  // Only approved admins may access admin pages.
  if (!isAdmin) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.search = "";

    const response = NextResponse.redirect(loginUrl);

    // Preserve refreshed Supabase cookies if present.
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      response.cookies.set(cookie);
    });

    return response;
  }

  return supabaseResponse;
}