import { splitSetCookieString } from "cookie-es";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { ROUTE_ENDPOINTS } from "@/lib/constants/endpoints";

export async function middleware(request: NextRequest) {
  console.log("middleware called!");

  // Define routes that are accessible without authentication
  const publicRoutes = [
    ROUTE_ENDPOINTS.SignIn,
    ROUTE_ENDPOINTS.SignUp,
    ROUTE_ENDPOINTS.ForgotPassword,
  ];

  // Check if the current route is in the public routes list
  const isPublicRoute = publicRoutes.some(route => request.nextUrl.pathname.startsWith(route));

  // Retrieve authentication tokens from cookies
  const cookieRefreshToken = request.cookies.get("refreshToken")?.value;
  const cookieAccessToken = request.cookies.get("accessToken")?.value;

  // Redirect authenticated users away from public routes to the home page
  if (isPublicRoute && cookieRefreshToken && cookieAccessToken) {
    return redirectTo(ROUTE_ENDPOINTS.Home, request);
  }

  // Redirect unauthenticated users to the sign-in page
  if (!isPublicRoute && !cookieRefreshToken) {
    return redirectTo(ROUTE_ENDPOINTS.SignIn, request);
  }

  // Handle cases where the refresh token exists but the access token is missing
  if (!isPublicRoute && cookieRefreshToken && !cookieAccessToken) {
    try {
      // Attempt to refresh the access token
      const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          refreshToken: cookieRefreshToken,
          expiresInMins: 3,
        }),
      });

      console.log(await refreshResponse.json());

      // Create a new response to continue the request
      const res = NextResponse.next();

      const setCookieString = refreshResponse.headers.getSetCookie();
      splitSetCookieString(setCookieString).forEach(cookie => {
        console.log(cookie);
        res.headers.append("Set-Cookie", cookie);
      });

      // Continue with the request with refreshed tokens
      return res;
    } catch (error) {
      console.error("Token refresh failed:", error);
      return redirectTo(ROUTE_ENDPOINTS.SignIn, request);
    }
  }

  // For all other cases, continue with the request without modification
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * This matcher configuration ensures the middleware runs on all routes except:
     * - API routes (/api/*)
     * - Next.js static files (_next/static/*)
     * - Next.js optimized images (_next/image/*)
     * - Next.js data fetching routes (_next/data/*)
     * - Next.js original stack frames (__nextjs_original-stack-frame)
     * - Common static files (favicon.ico, sitemap.xml, robots.txt)
     * - SVG files (*.svg)
     */
    "/((?!api|_next/static|_next/image|_next/data|__nextjs_original-stack-frame|favicon.ico|sitemap.xml|robots.txt|.*\\.svg$).*)",
  ],
};

/**
 * Helper function to create a redirect response
 * @param url The URL to redirect to
 * @param request The original request object
 * @returns A redirect response
 */
function redirectTo(
  url: (typeof ROUTE_ENDPOINTS)[keyof typeof ROUTE_ENDPOINTS],
  request: NextRequest
) {
  return NextResponse.redirect(new URL(url, request.url));
}
