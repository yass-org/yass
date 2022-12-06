import { ReactNode } from "react";

import * as classNames from "../../../types/yass.json";

export interface GridProps {
  id?: string;
  testId?: string;
  children?: ReactNode;
  gridTemplateColumns: typeof classNames["grid-template-columns"][number];
  gap?: typeof classNames["gap"][number];
  columnGap?: typeof classNames["column-gap"][number];
  rowGap?: typeof classNames["row-gap"][number];
  justifyContent?: typeof classNames["justify-content"][number];
}

const Grid = ({
  id,
  testId,
  children,
  gridTemplateColumns = "grid-template-columns:three-column-layout",
  gap,
  rowGap,
  columnGap,
  justifyContent,
}: GridProps) => {
  return (
    <div
      id={id}
      data-testid={testId}
      className={[
        "display:grid",
        gridTemplateColumns,
        gap,
        columnGap,
        rowGap,
        justifyContent,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Grid;
