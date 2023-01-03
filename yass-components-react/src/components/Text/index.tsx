import { ReactNode } from "react";

import type {
  Color,
  FontWeight,
  FontSize,
  TextDecoration,
  TextAlign,
  VerticalAlign,
} from "../../types/yass";

export const tags = ["p", "span", "div", "strong"];

export interface TextProps {
  as?: typeof tags[number];
  id?: string;
  color?: Color;
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  textDecoration?: TextDecoration;
  textAlign?: TextAlign;
  verticalAlign?: VerticalAlign;
  testId?: string;
  children?: ReactNode;
}

const Text = ({
  children,
  id,
  as = "span",
  color = "color:text",
  fontWeight = "font-weight:normal",
  fontSize = "font-size:9",
  textDecoration,
  textAlign,
  verticalAlign,
  testId,
}: TextProps) => {
  const Component = as;

  return (
    // @ts-ignore TODO: figure out why
    <Component
      id={id}
      data-testid={testId}
      className={[
        color,
        fontWeight,
        fontSize,
        textDecoration,
        textAlign,
        verticalAlign,
      ].join(" ")}
    >
      {children}
    </Component>
  );
};

export default Text;
