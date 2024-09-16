/* eslint-disable no-useless-catch */
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

    const data = await response.json();

    if (!response.ok) {
      throw data;
    }

    return data;
  } catch (error) {
    throw error;
  }
}
