import { Button } from "@ui/components/Button";
import Logo from "assets/img/icons/next.svg";
import { cookies } from "next/headers";
import Link from "next/link";

import { ROUTE_ENDPOINTS } from "@/lib/constants/endpoints";
import { signOut } from "@/lib/services/auth";
import { getSession } from "@/lib/utils/server/auth";

export const AppNavigation = async (): Promise<JSX.Element> => {
  const session = await getSession();

  return (
    <header className="py-4 bg-white border-b">
      <div className="container flex items-center justify-between">
        <Link
          className="inline-block"
          href={ROUTE_ENDPOINTS.Home}
        >
          <Logo className="h-6" />
        </Link>
        <div>
          {(
            <div className="flex items-center gap-2">
              <span>{`${session?.firstName} ${session?.lastName.substring(0, 1)}.`}</span>
              <Button
                size="sm"
                onClick={async () => {
                  "use server";
                  // await signOut();
                  ["accessToken", "refreshToken", "session"].forEach(name => {
                    cookies().set(name, "", { maxAge: 0 });
                  });
                }}
              >
                Logout
              </Button>
            </div>
          ) || (
            <Button
              size="sm"
              disabled={false}
              asChild
            >
              <Link href={ROUTE_ENDPOINTS.SignIn}>Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
