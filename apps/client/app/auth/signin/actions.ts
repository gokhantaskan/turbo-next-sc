import { API_ENDPOINTS } from "@/lib/constants/endpoints";
import { User } from "@/lib/types/user";

import { type SignInFormSchemaType } from "./schema/signInSchema";

export async function signIn({ email, password }: SignInFormSchemaType): Promise<User> {
  try {
    const response = await fetch(API_ENDPOINTS.SignIn, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    return await response.json();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
