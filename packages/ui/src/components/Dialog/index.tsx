import "./dialog.scss";

import type { DialogProps as HeadlessDialogProps } from "@headlessui/react";
import {
  CloseButton,
  Description,
  Dialog as HeadlessDialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ReactNode } from "react";

export interface PDialogProps extends Omit<HeadlessDialogProps, "open" | "children"> {
  children?: ReactNode;
  actions?: ReactNode;
  isOpen: boolean;
  title?: string;
  description?: string;
  noBackdrop?: boolean;
}

export const Dialog = ({
  children,
  actions,
  isOpen,
  title,
  description,
  noBackdrop,
  ...rest
}: PDialogProps): JSX.Element => {
  return (
    <HeadlessDialog
      open={isOpen}
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
