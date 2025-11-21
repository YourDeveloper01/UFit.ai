import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

/**
 * Protects matched routes by requiring valid JWT in httpOnly cookie `token`.
 * If not valid, returns a JSON 401 (for API) or redirect to /login for pages.
 */

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow public assets and auth routes
  if (pathname.startsWith("/_next") || pathname.startsWith("/api/login") || pathname.startsWith("/api/signup") || pathname.startsWith("/api/logout")) {
    return NextResponse.next();
  }

  // Example: protect API upload route and upload page
  const protectedApi = pathname.startsWith("/api/upload");
  const protectedPath = pathname.startsWith("/upload") || pathname.startsWith("/dashboard"); // adjust as needed

  const tokenCookie = req.cookies.get("token")?.value;

  if (!tokenCookie) {
    // If API call -> return JSON 401
    if (protectedApi) return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
    // If page, redirect to login
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    jwt.verify(tokenCookie, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    if (protectedApi) return new NextResponse(JSON.stringify({ error: "Invalid token" }), { status: 403, headers: { "Content-Type": "application/json" } });
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/api/upload/:path*", "/upload/:path*", "/dashboard/:path*"], // adjust the paths you want protected
};
