import { ComponentStory, ComponentMeta } from "@storybook/react";

import Inline from "../Inline";
import Lozenge from "./index";
import Text from "../Text";
import { variants } from "../../shared";

import type { Variant } from "../../shared";

export default {
  title: "Lozenge",
  component: Lozenge,
  argTypes: {
    children: { control: "text" },
    variant: {
      options: ["primary", "subtle", "neutral", "success", "warning", "danger"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Lozenge>;

export const Variants: ComponentStory<typeof Lozenge> = (args) => (
  <Inline gap="gap:10">
    {variants.map((variant: Variant) => (
      <Lozenge variant={variant}>{variant}</Lozenge>
    ))}
  </Inline>
);

export const Paragraph: ComponentStory<typeof Lozenge> = (args) => (
  <Text verticalAlign="vertical-align:baseline">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam doloremque
    dolores asperiores odit nobis enim laboriosam harum deleniti
    <Lozenge {...args}>I'm a lozenge</Lozenge> eos eaque ducimus, porro
    quibusdam error explicabo nisi maiores dolorum nam consequuntur. Praesentium
    eum atque dignissimos adipisci cupiditate inventore commodi. Facilis impedit
    iusto ipsum <Lozenge {...args}>I'm also a lozenge</Lozenge> quas veniam
    commodi adipisci quam dolores voluptatum modi eveniet assumenda a saepe, est
    dolorum esse! Quasi illo loremque nostrum quo molestiaias architecto
    officiis praesentium dignissimos nobis debitis impedit?
    <Lozenge {...args}>I'm the last lozenge</Lozenge>
  </Text>
);
