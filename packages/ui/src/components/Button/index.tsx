"use client";

import "./button.scss";

import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

export interface PButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "error";
  type?: "submit" | "button";
  loading?: boolean;
}

export const Button = ({
  asChild,
  children,
  className,
  size = "md",
  variant,
  type = "button",
  disabled,
  loading,
  ...rest
}: PButtonProps): JSX.Element => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "p-button",
        `p-button--${size}`,
        variant && `p-button--${variant}`,
        loading && `p-button--${loading}`,
        className
      )}
      type={type}
      disabled={disabled || loading}
      {...rest}
    >
      {children}
    </Comp>
  );
};
