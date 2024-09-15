import { redirect } from "next/navigation";

import { ENDPOINTS } from "@/lib/constants/endpoints";

export default function AuthRoot() {
  return redirect(ENDPOINTS.SignIn);
}
