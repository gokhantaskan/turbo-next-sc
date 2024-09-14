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
  type = "button",
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
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
