import { type NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth";

export async function middleware(request: NextRequest) {
  const session = getSessionCookie(request);

  if (
    session &&
    (request.nextUrl.pathname === "/Pages/signIn" ||
      request.nextUrl.pathname === "/Pages/signUp" ||
      request.nextUrl.pathname === "/Pages/signUpOrg")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (
    !session &&
    (request.nextUrl.pathname === "/Pages/UserProfile" ||
      request.nextUrl.pathname === "/Pages/Dashboard")
  ) {
    return NextResponse.redirect(new URL("/Pages/signIn", request.url));
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
