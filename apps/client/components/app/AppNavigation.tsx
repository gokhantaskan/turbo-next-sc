import { Button } from "@ui/components/Button";
import Logo from "assets/img/icons/next.svg";
import Link from "next/link";

import { ROUTE_ENDPOINTS } from "@/lib/constants/endpoints";
import { getSession } from "@/lib/utils/server/auth";

export const AppNavigation = async (): Promise<JSX.Element> => {
  const session = await getSession();
  const username = session?.username;

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
              {username}
              <Button size="sm">Logout</Button>
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
