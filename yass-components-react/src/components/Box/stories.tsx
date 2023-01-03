import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  colorNames,
  colorValues,
  opacity,
  scale,
} from "../../shared/constants";

import Box, { tags } from "./index";
import Inline from "../Inline";
import Stack from "../Stack";
import Text from "../Text";
import Grid from "../Grid";

export default {
  title: "Box",
  component: Box,
  argTypes: {
    children: {
      control: "text",
    },
    as: {
      options: tags,
      control: { type: "select" },
    },
    position: { control: { type: "select" } },
    padding: { control: { type: "select" } },
    paddingBlock: { control: { type: "select" } },
    paddingInline: { control: { type: "select" } },
    backgroundColor: { control: { type: "select" } },
    borderWidth: { control: { type: "select" } },
    borderColor: { control: { type: "select" } },
    borderStyle: { control: { type: "select" } },
    borderRadius: { control: { type: "select" } },
    overflow: { control: { type: "select" } },
    opacity: { control: { type: "select" } },
    zIndex: { control: { type: "select" } },
    textColor: { control: { type: "select" } },
  },
} as ComponentMeta<typeof Box>;

const DefaultTemplate: ComponentStory<typeof Box> = ({
  children,
  paddingBlock,
  paddingInline,
  borderColor,
  backgroundColor,
  borderStyle,
  borderWidth,
  borderRadius,
  overflow,
  opacity,
  zIndex,
  // @ts-ignore TODO: Better story types
  textColor,
}) => (
  <Box
    paddingBlock={paddingBlock}
    paddingInline={paddingInline}
    borderColor={borderColor}
    backgroundColor={backgroundColor}
    borderStyle={borderStyle}
    borderWidth={borderWidth}
    borderRadius={borderRadius}
    overflow={overflow}
    opacity={opacity}
    zIndex={zIndex}
  >
    <Text color={textColor}>{children}</Text>
  </Box>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  children: "Some content in a box",
  paddingBlock: "padding-block:10",
  paddingInline: "padding-inline:5",
  borderColor: "border-color:blue-400",
  backgroundColor: "background-color:blue-200",
  borderStyle: "border-style:solid",
  borderWidth: "border-width:2",
  borderRadius: "border-radius:3",
  overflow: "overflow:initial",
  opacity: "opacity:1000",
  zIndex: "z-index:100",
};

export const Colors: ComponentStory<typeof Box> = (_args) => (
  <Stack gap="gap:2">
    {colorNames.map((color) => (
      <Inline gap="gap:2">
        {colorValues.map((value) => (
          <Box
            display="display:flex"
            padding="padding:20"
            backgroundColor={`background-color:${color}-${value}`}
          ></Box>
        ))}
      </Inline>
    ))}
  </Stack>
);

export const Opacity: ComponentStory<typeof Box> = (_args) => (
  <Inline gap="gap:10">
    {opacity.map((value) => (
      <Stack alignItems="align-items:center">
        <Text>{value}</Text>

        <Box
          backgroundColor="background-color:neutral-900"
          padding="padding:30"
          opacity={`opacity:${value}`}
        ></Box>
      </Stack>
    ))}
  </Inline>
);

export const BorderRadius: ComponentStory<typeof Box> = (_args) => (
  <Grid
    gap="gap:5"
    justifyContent="justify-content:center"
    gridTemplateColumns="grid-template-columns:three-column-layout"
  >
    {scale.map((value) => (
      <Box display="display:flex">
        <Box
          backgroundColor="background-color:green-600"
          padding="padding:30"
          borderRadius={`border-radius:${value}`}
        >
          {value}
        </Box>
      </Box>
    ))}
  </Grid>
);
