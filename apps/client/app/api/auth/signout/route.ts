import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = NextResponse.json({ message: "Success" }, { status: 200 });

    ["accessToken", "refreshToken", "session"].forEach(name => {
      res.cookies.delete(name);
    });

    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
