import { ReactNode } from "react";

import type { Gap, AlignItems, JustifyContent } from "../../types/yass";

export interface InlineProps {
  gap?: Gap;
  id?: string;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
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
