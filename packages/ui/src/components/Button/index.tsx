"use client";

import "./button.scss";

import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

export interface PButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  className?: ClassValue;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "error";
  type?: "submit" | "button";
}

export const Button = ({
  children,
  className,
  size = "md",
  variant,
  type = "button",
  ...rest
}: PButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(
        "p-button",
        `p-button--${size}`,
        variant && `p-button--${variant}`,
        className
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
