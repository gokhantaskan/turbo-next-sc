import { redirect } from "next/navigation";

import { ROUTE_ENDPOINTS } from "@/lib/constants/endpoints";

export default function AuthRoot() {
  return redirect(ROUTE_ENDPOINTS.SignIn);
}
