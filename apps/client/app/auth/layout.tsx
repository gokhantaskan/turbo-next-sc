import "./assets/styles/auth.scss";

import Logo from "assets/img/icons/next.svg";

import { AuthFooter } from "./components/Footer";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-layout">
      {/* Left */}
      <div className="flex flex-col">
        <div className="p-4">
          <Logo className="h-6" />
        </div>
        <div className="flex flex-col items-center justify-center flex-1 p-4">{children}</div>
        <AuthFooter />
      </div>
      {/* Right */}
      <div className="h-full bg-gray-100 max-lg:hidden"></div>
    </div>
  );
}
