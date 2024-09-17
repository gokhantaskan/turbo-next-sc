import Link from "next/link";

import { ROUTE_ENDPOINTS } from "@/lib/constants/endpoints";

export const ProfileNotFound = (): JSX.Element => {
  return (
    <div className="container py-8">
      <div className="flex flex-col items-center justify-center gap-1 max-w-[65ch]">
        <h1 className="text-2xl font-semibold">Profile not found</h1>
        <p className="text-lg text-gray-700">The profile you are looking for does not exist.</p>
        <Link href={ROUTE_ENDPOINTS.Home}>Return Home</Link>
      </div>
    </div>
  );
};
