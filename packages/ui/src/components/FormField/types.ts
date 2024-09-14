import { FieldProps } from "@headlessui/react";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

export type PFormFieldProps = Omit<FieldProps, "className" | "children"> & {
  className?: ClassValue;
  children?: ReactNode;
  label?: string;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
};
