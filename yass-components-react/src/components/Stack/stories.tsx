import { ComponentStory, ComponentMeta } from "@storybook/react";

import * as classNames from "../../../types/yass.json";

import Box from "../Box";
import Inline from "../Inline";
import Stack from "./index";
import Text from "../Text";

export default {
  title: "Stack",
  component: Stack,
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
} as ComponentMeta<typeof Stack>;

export const Gap: ComponentStory<typeof Stack> = (args) => (
  <Inline alignItems="align-items:flex-start" gap="gap:5">
    {classNames["gap"].map((gap: string) => (
      <>
        <Text>{gap}</Text>
        <Stack gap={gap}>
          <Box
            padding="padding:20"
            backgroundColor="background-color:purple-400"
          />
          <Box
            padding="padding:20"
            backgroundColor="background-color:purple-400"
          />
        </Stack>
      </>
    ))}
  </Inline>
);
