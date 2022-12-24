import { ReactNode } from "react";

import * as classNames from "../../../types/yass.json";

export interface InlineProps {
  gap?: typeof classNames["gap"][number];
  id?: string;
  alignItems?: typeof classNames["align-items"][number];
  justifyContent?: typeof classNames["justify-content"][number];
  testId?: string;
  children?: ReactNode;
}

const Inline = ({
  gap = "gap:0",
  alignItems = "align-items:center",
  id,
  justifyContent,
  testId,
  children,
}: InlineProps) => {
  return (
    <div
      id={id}
      data-testid={testId}
      className={["display:flex", gap, alignItems, justifyContent].join(" ")}
    >
      {children}
    </div>
  );
};

export default Inline;
