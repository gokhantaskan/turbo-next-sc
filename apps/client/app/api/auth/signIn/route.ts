import { serialize, splitSetCookieString } from "cookie-es";
import { NextResponse } from "next/server";

import { type CustomError } from "@/lib/schema/errorSchema";
import { User } from "@/lib/types/user";
import { encrypt } from "@/lib/utils/server/auth";

type AuthUser = User & {
  token: string;
  refreshToken: string;
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const error: CustomError = {
        status: response.status,
        statusText: response.statusText,
        data: data,
      };

      return NextResponse.json(error, { status: response.status, statusText: response.statusText });
    }

    // Extract user data, excluding tokens
    const { token: _at, refreshToken: _rt, ...user }: AuthUser = data;

    const res = NextResponse.json(user, { status: 200 });
    const setCookieString = response.headers.getSetCookie();

    splitSetCookieString(setCookieString).forEach(cookie => {
      res.headers.append("Set-Cookie", cookie);
    });

    const sessionCookie = serialize("session", await encrypt(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: Number(process.env.NEXT_RTE),
    });

    res.headers.append("Set-Cookie", sessionCookie);

    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
