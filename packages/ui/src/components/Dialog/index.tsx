import "./dialog.scss";

import {
  Description,
  Dialog as HeadlessDialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import clsx from "clsx";

import { PDialogProps } from "./types.js";

export const Dialog = ({
  className,
  children,
  isOpen,
  onClose,
  title,
  description,
  ...rest
}: PDialogProps) => {
  return (
    <HeadlessDialog
      open={isOpen}
      onClose={onClose}
      className={clsx("p-dialog", className)}
      as="div"
      {...rest}
    >
      <DialogBackdrop className="p-dialog__backdrop" />
      {/* Main Content */}
      <div className="p-dialog__wrapper">
        <DialogPanel className="p-dialog__panel">
          <div className="p-dialog__header">
            <div>
              <DialogTitle className="p-dialog__title">{title}</DialogTitle>
              <Description className="p-dialog__description">{description}</Description>
            </div>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-dialog__close-button"
            >
              &times;
            </button>
          </div>

          <div className="p-dialog__content">{children}</div>
        </DialogPanel>
      </div>
    </HeadlessDialog>
  );
};
