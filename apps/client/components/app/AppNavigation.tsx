import { Button } from "@repo/ui/Button";
import Logo from "assets/img/icons/next.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { ENDPOINTS } from "@/lib/constants/endpoints";

export const AppNavigation = (): JSX.Element => {
  const router = useRouter();

  return (
    <header className="py-4 bg-white border-b">
      <div className="container flex items-center justify-between">
        <Link
          className="inline-block"
          href={ENDPOINTS.Home}
        >
          <Logo className="h-6" />
        </Link>
        <div>
          <Button
            size="sm"
            disabled={false}
            onClick={() => {
              router.push(ENDPOINTS.SignIn);
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};
