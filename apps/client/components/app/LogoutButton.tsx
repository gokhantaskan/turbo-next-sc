"use client";

import { Button } from "@ui/components/Button";
import { useRouter } from "next/navigation";

import { ROUTE_ENDPOINTS } from "@/lib/constants/endpoints";
import { signOut } from "@/lib/services/auth";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.push(ROUTE_ENDPOINTS.SignIn);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button
      size="sm"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};
