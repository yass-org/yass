import { ComponentStory, ComponentMeta } from "@storybook/react";

import * as classNames from "../../../types/yass.json";

import Box from "../Box";
import Inline from "./index";
import Stack from "../Stack";
import Text from "../Text";

export default {
  title: "Inline",
  component: Inline,
  argTypes: {
    children: {
      control: "text",
    },
    gap: {
      control: { type: "select" },
      options: classNames["gap"],
    },
    justifyContent: {
      control: { type: "select" },
      options: classNames["justify-content"],
    },
    alignItems: {
      control: { type: "select" },
      options: classNames["align-items"],
    },
  },
} as ComponentMeta<typeof Inline>;

export const Gap: ComponentStory<typeof Inline> = (args) => (
  <Stack gap="gap:5">
    {classNames["gap"].map((gap: string) => (
      <>
        <Text>{gap}</Text>
        <Inline gap={gap}>
          <Box
            padding="padding:20"
            backgroundColor="background-color:purple-400"
          />
          <Box
            padding="padding:20"
            backgroundColor="background-color:purple-400"
          />
        </Inline>
      </>
    ))}
  </Stack>
);
