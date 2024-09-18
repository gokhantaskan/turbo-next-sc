/* eslint-disable no-useless-catch */
import { API_ENDPOINTS } from "@/lib/constants/endpoints";
import { type SignInFormSchemaType } from "@/lib/schema/signInSchema";
import { User } from "@/lib/types/user";

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

export async function signOut(): Promise<void> {
  try {
    const response = await fetch(API_ENDPOINTS.SignOut, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      throw data;
    }

    return;
  } catch (error) {
    throw error;
  }
}

export async function refresh(): Promise<void> {
  try {
    const response = await fetch(API_ENDPOINTS.RefreshAuthToken, {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw data;
    }

    return;
  } catch (error) {
    throw error;
  }
}
