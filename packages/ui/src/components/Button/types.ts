import type { ClassValue } from "clsx";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

export type PButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: ClassValue;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "error";
  type?: "submit" | "button";
};
