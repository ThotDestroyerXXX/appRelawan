import { type NextRequest, NextResponse } from "next/server";
import { betterFetch } from "@better-fetch/fetch";
import { type Session } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") ?? "", // Forward the cookies from the request
      },
    },
  );

  if (session && request.nextUrl.pathname.startsWith("/Pages/Auth/")) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (
    !session &&
    (request.nextUrl.pathname.startsWith("/Pages/User/") ||
      request.nextUrl.pathname.startsWith("/Pages/Organization/"))
  ) {
    return NextResponse.redirect(new URL("/Pages/Auth/signIn", request.url));
  } else if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/Pages/Home", request.url));
  } else if (
    !session?.user.organization_id &&
    request.nextUrl.pathname.startsWith("/Pages/Organization/")
  ) {
    return NextResponse.redirect(new URL("/Pages/User/Dashboard", request.url));
  } else if (
    session?.user.organization_id &&
    request.nextUrl.pathname.startsWith("/Pages/User/")
  ) {
    return NextResponse.redirect(
      new URL("/Pages/Organization/Dashboard", request.url),
    );
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
