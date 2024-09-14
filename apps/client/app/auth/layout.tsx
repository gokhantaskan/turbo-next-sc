import "./assets/styles/auth.scss";

import Logo from "assets/img/icons/next.svg";

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
        <div className="p-4 flex flex-1 flex-col items-center justify-center">{children}</div>
        <footer className="p-4">&copy; App</footer>
      </div>
      {/* Right */}
      <div className="h-full bg-gray-100 max-lg:hidden"></div>
    </div>
  );
}
