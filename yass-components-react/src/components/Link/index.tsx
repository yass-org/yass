import { ReactNode } from "react";

export const target = ["_blank", "_self", "_parent", "_top"];

export interface LinkProps {
  href: string;
  target?: typeof target[number] | string; // Allow link to be opened in a named iframe
  testId?: string;
  children?: ReactNode;
}

const Link = ({ href, children, testId, target = "_self" }: LinkProps) => {
  return (
    <a
      data-testid={testId}
      href={href}
      target={target}
      className={[
        "color:link",
        "hover(color:link-hover)",
        "active(color:link-active)",
        "visited(color:link-visited)",
      ].join(" ")}
    >
      {children}
    </a>
  );
};

export default Link;
