"use client";

export const AuthFooter = () => {
  return (
    <footer
      suppressHydrationWarning
      className="p-4 text-sm text-center"
    >
      &copy; App - {new Date().getFullYear()}
    </footer>
  );
};
