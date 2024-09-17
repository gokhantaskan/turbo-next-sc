"use server";

import { safeDestr } from "destr";
import { cookies } from "next/headers";

import { User } from "@/lib/types/user";

export async function getSession() {
  const session = cookies().get("session")?.value;

  if (!session) return null;

  return safeDestr<User>(session);
}
