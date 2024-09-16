import { NextResponse } from "next/server";

import { type CustomError } from "@/lib/types/globals";
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
      console.log("Response is not ok!");

      const error: CustomError = {
        status: response.status,
        statusText: response.statusText,
        data: data,
      };

      return NextResponse.json(error, { status: response.status, statusText: response.statusText });
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
