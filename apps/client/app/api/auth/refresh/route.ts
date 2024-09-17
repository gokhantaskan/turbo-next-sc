import { splitSetCookieString } from "cookie-es";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { type CustomError } from "@/lib/types/globals";

export async function POST() {
  try {
    // If cookies can get
    const cookieStore = cookies();
    const cookieRefreshToken = cookieStore.get("refreshToken")?.value;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken: cookieRefreshToken,
        expiresInMins: Number(process.env.NEXT_RTE),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const error: CustomError = {
        status: response.status,
        statusText: response.statusText,
        data,
      };

      return NextResponse.json(error, {
        status: response.status,
        statusText: response.statusText,
      });
    }

    const res = NextResponse.json(null, { status: 201 });

    const setCookieString = response.headers.getSetCookie();
    splitSetCookieString(setCookieString).forEach(cookie => {
      res.headers.append("Set-Cookie", cookie);
    });

    return res;
  } catch (error) {
    console.error("Refresh error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
