import "./form-field.scss";

import { Description, Field, type FieldProps, Label } from "@headlessui/react";
import clsx, { ClassValue } from "clsx";
import { ReactNode } from "react";

export interface PFormFieldProps extends Omit<FieldProps, "className" | "children"> {
  className?: ClassValue;
  children?: ReactNode;
  label?: string;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
}

export const FormField = ({
  className,
  children,
  label,
  required,
  helperText,
  errorMessage,
  ...rest
}: PFormFieldProps): JSX.Element => {
  return (
    <Field
      className={clsx("p-form-field", errorMessage && "p-form-field__has-error", className)}
      {...rest}
    >
      {label && (
        <Label className={clsx("p-form-field__label", required && "is-required")}>{label}</Label>
      )}

      <div className="p-form-field__wrap">{children}</div>

      {(errorMessage || helperText) && (
        <Description className={clsx("p-form-field__description", errorMessage && "is-error")}>
          {errorMessage || helperText}
        </Description>
      )}
    </Field>
  );
};
