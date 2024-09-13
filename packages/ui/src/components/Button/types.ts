import type { ClassValue } from "clsx";
import type { MouseEventHandler, ReactNode } from "react";

export type PButtonProps = {
  children: ReactNode;
  className?: ClassValue;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary";
};
