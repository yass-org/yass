import { ReactNode } from "react";

import type {
  GridTemplateColumns,
  Gap,
  ColumnGap,
  RowGap,
  JustifyContent,
} from "../../types/yass";

export interface GridProps {
  id?: string;
  testId?: string;
  children?: ReactNode;
  gridTemplateColumns: GridTemplateColumns;
  gap?: Gap;
  columnGap?: ColumnGap;
  rowGap?: RowGap;
  justifyContent?: JustifyContent;
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
