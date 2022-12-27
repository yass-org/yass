import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text, { tags } from "./index";
import Stack from "../Stack";
import { fontWeight, scale } from "../../shared/constants";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
    color: { control: { type: "select" } },
    as: {
      options: tags,
      control: { type: "select" },
    },
    fontWeight: { control: { type: "select" } },
    fontSize: { control: { type: "select" } },
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

export const FontWeight: ComponentStory<typeof Text> = (_args) => (
  <Stack gap="gap:5">
    {fontWeight.map((weight) => (
      <Text
        fontWeight={`font-weight:${weight}`}
      >{`font-weight:${weight}`}</Text>
    ))}
  </Stack>
);

export const FontSize: ComponentStory<typeof Text> = (_args) => (
  <Stack gap="gap:5">
    {scale.map((fontSize) => (
      <Text fontSize={`font-size:${fontSize}`}>{`font-size:${fontSize}`}</Text>
    ))}
  </Stack>
);
