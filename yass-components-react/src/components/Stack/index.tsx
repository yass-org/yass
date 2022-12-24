import { ReactNode } from "react";

import * as classNames from "../../../types/yass.json";

export interface StackProps {
  gap?: typeof classNames["gap"][number];
  id?: string;
  alignItems?: typeof classNames["align-items"][number];
  justifyContent?: typeof classNames["justify-content"][number];
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
