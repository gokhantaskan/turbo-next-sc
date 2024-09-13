import "./card.scss";

import clsx from "clsx";

import { PCardProps } from "./types.js";

export function Card({ className, children }: PCardProps): JSX.Element {
  return (
    <div
      className={clsx("p-card", className)}
      rel="noopener noreferrer"
    >
      <p>{children}</p>
    </div>
  );
}
