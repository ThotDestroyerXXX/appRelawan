import { type NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth";

export async function middleware(request: NextRequest) {
  const session = getSessionCookie(request);

  if (session && request.nextUrl.pathname.startsWith("/Pages/Auth/")) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (
    !session &&
    (request.nextUrl.pathname.startsWith("/Pages/User/") ||
      request.nextUrl.pathname.startsWith("/Pages/Organization/"))
  ) {
    return NextResponse.redirect(new URL("/Pages/Auth/signIn", request.url));
  } else if (
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname === "/Pages/BE_Testing"
  ) {
    return NextResponse.redirect(new URL("/Pages/Home", request.url));
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
