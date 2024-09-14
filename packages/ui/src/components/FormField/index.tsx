import "./form-field.scss";

import { Description, Field, Label } from "@headlessui/react";
import clsx from "clsx";

import { PFormFieldProps } from "./types.js";

export const FormField: React.FC<PFormFieldProps> = ({
  className,
  children,
  label,
  required,
  helperText,
  errorMessage,
  ...rest
}) => {
  return (
    <Field
      className={clsx("p-form-field", className)}
      {...rest}
    >
      {label && (
        <Label className="p-form-field__label">
          {label}
          {required && <span>*</span>}
        </Label>
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
