import { NextResponse } from "next/server";

import { User } from "@/lib/types/user";

type AuthUser = User & {
  token: string;
  refreshToken: string;
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || "Login failed" },
        { status: response.status }
      );
    }

    // Extract user data, excluding tokens
    const { token, refreshToken, ...user }: AuthUser = data;
    const res = NextResponse.json(user, { status: 200 });

    res.cookies.set("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 3 * 60, // 3 min
    });

    if (refreshToken) {
      res.cookies.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60, // 30 min
      });
    }

    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
