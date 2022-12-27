import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "../Box";
import Inline from "../Inline";
import Stack from "./index";
import Text from "../Text";
import { scale } from "../../shared/constants";

export default {
  title: "Stack",
  component: Stack,
  argTypes: {
    children: {
      control: "text",
    },
    gap: { control: { type: "text" } },
    justifyContent: { control: { type: "text" } },
    alignItems: { control: { type: "text" } },
  },
} as ComponentMeta<typeof Stack>;

export const Gap: ComponentStory<typeof Stack> = (args) => (
  <Inline alignItems="align-items:flex-start" gap="gap:5">
    {scale.map((gap) => (
      <>
        <Text>{`gap:${gap}`}</Text>
        <Stack gap={`gap:${gap}`}>
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
