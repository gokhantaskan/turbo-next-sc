import { AppNavigation } from "@/components/app/AppNavigation";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-lvh">
      <AppNavigation />
      <main className="flex-1">{children}</main>
    </div>
  );
}
