import { ReactNode } from "react";

import type {
  Display,
  Position,
  Padding,
  PaddingBlock,
  PaddingInline,
  BackgroundColor,
  BorderWidth,
  BorderColor,
  BorderStyle,
  BorderRadius,
  Overflow,
  Opacity,
  ZIndex,
} from "../../types/yass";

export const tags = ["div", "span"];

export interface BoxProps {
  id?: string;
  testId?: string;
  children?: ReactNode;
  as?: typeof tags[number];
  display?: Display;
  position?: Position;
  padding?: Padding;
  paddingBlock?: PaddingBlock;
  paddingInline?: PaddingInline;
  backgroundColor?: BackgroundColor;
  borderWidth?: BorderWidth;
  borderColor?: BorderColor;
  borderStyle?: BorderStyle;
  borderRadius?: BorderRadius;
  overflow?: Overflow;
  opacity?: Opacity;
  zIndex?: ZIndex;
}

const Box = ({
  id,
  testId,
  as: Component = "div",
  padding,
  paddingBlock,
  paddingInline,
  backgroundColor,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
  display = "display:flex",
  overflow,
  opacity,
  zIndex,
  children,
}: BoxProps) => {
  return (
    // @ts-ignore
    <Component
      id={id}
      data-testid={testId}
      className={[
        "box-sizing:border-box",
        padding,
        paddingBlock,
        paddingInline,
        backgroundColor,
        borderWidth,
        borderColor,
        borderStyle,
        borderRadius,
        display,
        overflow,
        opacity,
        zIndex,
      ].join(" ")}
    >
      {children}
    </Component>
  );
};

export default Box;
