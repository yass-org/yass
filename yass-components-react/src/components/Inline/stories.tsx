import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "../Box";
import Inline from "./index";
import Stack from "../Stack";
import Text from "../Text";
import { scale } from "../../shared/constants";

export default {
  title: "Inline",
  component: Inline,
  argTypes: {
    children: {
      control: "text",
    },
    gap: { control: { type: "text" } },
    justifyContent: { control: { type: "text" } },
    alignItems: { control: { type: "text" } },
  },
} as ComponentMeta<typeof Inline>;

export const Gap: ComponentStory<typeof Inline> = (args) => (
  <Stack gap="gap:5">
    {scale.map((gap) => (
      <>
        <Text>{`gap:${gap}`}</Text>
        <Inline gap={`gap:${gap}`}>
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
