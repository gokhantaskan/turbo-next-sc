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
        expiresInMins: 60,
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

    const { token, refreshToken } = data;
    const res = NextResponse.json(null, { status: 200 });

    res.cookies.set("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 3 * 60, // 3 min
    });

    res.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60, // 1hr
    });

    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
