import "./alert.scss";

import clsx from "clsx";
import { ReactNode, useState } from "react";

export type PAlertProps = {
  title?: string;
  description: string;
  variant?: "info" | "success" | "warning" | "error";
  closable?: boolean;
  icon?: ReactNode;
  actions?: ReactNode;
  onClose?: () => void;
};

export const Alert = ({
  title,
  description,
  variant,
  icon,
  actions,
  closable = true,
  onClose,
}: PAlertProps): JSX.Element | null => {
  const [isVisible, setIsVisible] = useState(true);

  function handleClose() {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className={clsx("p-alert", variant && `p-alert--${variant}`)}>
      {icon && <div className="p-alert__icon">{icon}</div>}
      <div className="p-alert__content">
        {title && <p className="p-alert__title">{title}</p>}
        <p className="p-alert__description">{description}</p>
        {actions && <div className="p-alert__actions">{actions}</div>}
      </div>
      <div className="p-alert__close">
        {closable && <button onClick={handleClose}>&times;</button>}
      </div>
    </div>
  );
};
