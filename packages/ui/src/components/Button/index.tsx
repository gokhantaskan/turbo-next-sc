"use client";

import "./button.scss";

import clsx from "clsx";

import { PButtonProps } from "./types.js";

export const Button: React.FC<PButtonProps> = ({
  children,
  className,
  onClick,
  size = "md",
  variant = "default",
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "p-button",
        `p-button--${size}`,
        variant !== "default" ? `p-button--${variant}` : "",
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
