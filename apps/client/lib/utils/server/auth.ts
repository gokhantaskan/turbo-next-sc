"use server";

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { User } from "@/lib/types/user";

const secretKey = process.env.NEXT_SESSION_KEY;
if (!secretKey) {
  throw new Error("NEXT_SESSION_KEY is not set");
}
const key = new TextEncoder().encode(secretKey);
const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;

export async function encrypt(payload: Record<string, any>) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2d")
    .sign(key);
}

export async function decrypt(input: string) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });

  return payload;
}

export async function getSession(): Promise<User | null> {
  const session = cookies().get("session")?.value;

  if (!session) {
    return null;
  }

  try {
    return (await decrypt(session)) as User;
  } catch (error) {
    console.error("Error decrypting session:", error);
    return null;
  }
}

export async function setSession(user: User): Promise<void> {
  const expirationDate = new Date(Date.now() + twoDaysInMs);
  const sessionData = {
    ...user,
    exp: Math.floor(expirationDate.getTime() / 1000),
  };

  try {
    const encryptedSession = await encrypt(sessionData);
    cookies().set("session", encryptedSession, {
      httpOnly: true,
      expires: expirationDate,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
  } catch (error) {
    console.error("Error setting session:", error);
    throw new Error("Failed to set session");
  }
}

export async function updateSession(request: NextRequest) {
  const cookie = request.cookies.get("session")?.value;

  if (!cookie) {
    return NextResponse.next();
  }

  try {
    const parsed = await decrypt(cookie);
    const newExpiration = new Date(Date.now() + twoDaysInMs);
    parsed.exp = Math.floor(newExpiration.getTime() / 1000);

    const res = NextResponse.next();
    res.cookies.set("session", await encrypt(parsed), {
      httpOnly: true,
      expires: newExpiration,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res;
  } catch (error) {
    console.error("Error updating session:", error);
    return NextResponse.next();
  }
}

export async function clearSession(): Promise<void> {
  cookies().set("session", "", { expires: new Date(0) });
}
