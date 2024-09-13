"use client";

import "./button.scss";

import clsx from "clsx";

import { PButtonProps } from "./types.js";

export const Button = ({
  children,
  className,
  onClick,
  size = "md",
  variant = "default",
}: PButtonProps) => {
  return (
    <button
      className={clsx(
        "p-button",
        `p-button--${size}`,
        variant !== "default" ? `p-button--${variant}` : "",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
