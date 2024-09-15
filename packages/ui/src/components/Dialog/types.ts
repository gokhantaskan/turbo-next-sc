import type { DialogProps as HeadlessDialogProps } from "@headlessui/react";
import { ReactNode } from "react";

import type { Prettify } from "../../lib/types/index.js";

export type PDialogProps = Prettify<
  Omit<HeadlessDialogProps, "open" | "children"> & {
    children?: ReactNode;
    actions?: ReactNode;
    isOpen: boolean;
    title?: string;
    description?: string;
    noBackdrop?: boolean;
  }
>;
