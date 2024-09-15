import { API_ENDPOINTS } from "@/lib/constants/endpoints";

import { type SignInFormSchemaType } from "./schema/signInSchema";

export async function signIn({ email, password }: SignInFormSchemaType) {
  try {
    const response = await fetch(API_ENDPOINTS.SignIn, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("data in action", data);
    return data.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
