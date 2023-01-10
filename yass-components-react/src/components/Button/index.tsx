import React, { MouseEventHandler, ReactNode, SyntheticEvent } from "react";
import { Size, Variant } from "../../shared";

const baseStyles = `
  border-radius:3
  border-style:solid
`;

const sizes = (size: Size) => {
  return `
    padding-inline:button-${size}
    padding-block:button-${size}
    font-size:button-${size}
  `;
};

const variants = (variant: Variant) => {
  return `
    color:${variant}
    background-color:${variant}
    border-color:${variant}

    hover(color:${variant}-hover)
    hover(background-color:${variant}-hover)  
    hover(border-color:${variant}-hover)

    active(color:${variant}-active)
    active(background-color:${variant}-active)
    active(border-color:${variant}-active)
  `;
};

export interface ButtonProps {
  id?: string;
  testId?: string;
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
  onClick?: (event: any) => void; // TODO: Better types
}

const Button = ({
  children,
  id,
  testId,
  onClick = () => {},
  variant = "primary",
  size = "medium",
}: ButtonProps) => {
  return (
    <button
      id={id}
      onClick={onClick}
      data-testid={testId}
      className={[baseStyles, variants(variant), sizes(size)].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
