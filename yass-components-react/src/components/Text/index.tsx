import { ReactNode } from "react";

import * as classNames from "../../../types/yass.json";

export const tags = ["p", "span", "div", "strong"];

export interface TextProps {
  as?: typeof tags[number];
  id?: string;
  color?: typeof classNames["color"][number];
  fontWeight?: typeof classNames["font-weight"][number];
  fontSize?: typeof classNames["font-size"][number];
  textDecoration?: typeof classNames["text-decoration"][number];
  textAlign?: typeof classNames["text-align"][number];
  verticalAlign?: typeof classNames["vertical-align"][number];
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
