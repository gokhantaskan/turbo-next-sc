import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { ROUTE_ENDPOINTS } from "@/lib/constants/endpoints";
import { signOut } from "@/lib/services/auth";

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    async function handleSignOut() {
      await signOut();
      router.push(ROUTE_ENDPOINTS.SignIn);
    }

    handleSignOut();
  }, []);

  return <div></div>;
}
