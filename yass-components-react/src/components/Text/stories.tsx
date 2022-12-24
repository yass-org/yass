import { ComponentStory, ComponentMeta } from "@storybook/react";

import * as classNames from "../../../types/yass.json";

import Text, { tags } from "./index";
import Stack from "../Stack";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
    color: {
      options: classNames["color"],
      control: { type: "select" },
    },
    as: {
      options: tags,
      control: { type: "select" },
    },
    fontWeight: {
      options: classNames["font-weight"],
      control: { type: "select" },
    },
    fontSize: {
      options: classNames["font-size"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: "span",
  color: "color:text",
  fontWeight: "font-weight:normal",
  fontSize: "font-size:10",
  children: "This is some text content",
};

export const FontWeight: ComponentStory<typeof Text> = (args) => (
  <Stack gap="gap:5">
    {classNames["font-weight"].map((fontWeight: string) => (
      <Text fontWeight={fontWeight}>{fontWeight}</Text>
    ))}
  </Stack>
);

export const FontSize: ComponentStory<typeof Text> = (args) => (
  <Stack gap="gap:5">
    {classNames["font-size"].map((fontSize: string) => (
      <Text fontSize={fontSize}>{fontSize}</Text>
    ))}
  </Stack>
);
