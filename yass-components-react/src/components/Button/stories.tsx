import { ComponentStory, ComponentMeta } from "@storybook/react";

import Inline from "../Inline";
import Button, { tags } from "./index";
import { variants, sizes } from "../../shared";

import type { Size, Variant } from "../../shared";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    as: {
      options: tags,
      control: { type: "select" },
    },
    variant: {
      options: variants,
      control: { type: "select" },
    },
    size: {
      options: sizes,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

export const Variants: ComponentStory<typeof Button> = (args) => (
  <Inline gap="gap:10">
    {variants.map((variant: Variant) => (
      <Button variant={variant}>{variant}</Button>
    ))}
  </Inline>
);

export const Sizes: ComponentStory<typeof Button> = (args) => (
  <Inline gap="gap:10">
    {sizes.map((size: Size) => (
      <Button size={size}>{size}</Button>
    ))}
  </Inline>
);
