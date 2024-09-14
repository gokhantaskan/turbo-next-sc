import "./dialog.scss";

import {
  CloseButton,
  Description,
  Dialog as HeadlessDialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { PDialogProps } from "./types.js";

export const Dialog = ({
  children,
  actions,
  isOpen,
  onClose,
  title,
  description,
  noBackdrop,
  ...rest
}: PDialogProps) => {
  return (
    <HeadlessDialog
      open={isOpen}
      onClose={onClose}
      className="p-dialog"
      as="div"
      {...rest}
    >
      {!noBackdrop && <DialogBackdrop className="p-dialog__backdrop" />}
      {/* Main Content */}
      <div className="p-dialog__wrapper">
        <DialogPanel className="p-dialog__panel">
          <div className="p-dialog__header">
            <div>
              {title && <DialogTitle className="p-dialog__title">{title}</DialogTitle>}
              {description && (
                <Description className="p-dialog__description">{description}</Description>
              )}
            </div>
            {/* Close Button */}
            <CloseButton className="p-dialog__close-button">&times;</CloseButton>
          </div>

          <div className="p-dialog__content">{children}</div>
          <div className="p-dialog__actions">{actions}</div>
        </DialogPanel>
      </div>
    </HeadlessDialog>
  );
};
