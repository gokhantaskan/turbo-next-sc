import { NextResponse } from "next/server";

// import { type CustomError } from "@/lib/schema/errorSchema";

export async function POST() {
  try {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/auth/logout`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    // });

    // const data = await response.json();

    // if (!response.ok) {
    //   const error: CustomError = {
    //     status: response.status,
    //     statusText: response.statusText,
    //     data: data,
    //   };

    //   return NextResponse.json(error, { status: response.status, statusText: response.statusText });
    // }

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
