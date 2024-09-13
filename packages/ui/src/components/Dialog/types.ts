import type { DialogProps as HeadlessDialogProps } from "@headlessui/react";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

import { Prettify } from "../../lib/types/index.js";

export type PDialogProps = Prettify<
  Omit<HeadlessDialogProps, "open" | "onClose" | "children"> & {
    className?: ClassValue;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
  }
>;
