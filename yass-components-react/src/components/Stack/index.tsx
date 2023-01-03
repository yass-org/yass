import { ReactNode } from "react";

import type { Gap, AlignItems, JustifyContent } from "../../types/yass";

export interface StackProps {
  gap?: Gap;
  id?: string;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  testId?: string;
  children?: ReactNode;
}

const Stack = ({
  gap = "gap:0",
  id,
  alignItems,
  justifyContent,
  testId,
  children,
}: StackProps) => {
  return (
    <div
      id={id}
      data-testid={testId}
      className={[
        "display:flex",
        "flex-direction:column",
        gap,
        alignItems,
        justifyContent,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Stack;
