import { ComponentStory, ComponentMeta } from "@storybook/react";

import * as classNames from "../../../types/yass.json";

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
    position: {
      control: { type: "select" },
      options: classNames["position"],
    },
    padding: {
      control: { type: "select" },
      options: classNames["padding"],
    },
    paddingBlock: {
      control: { type: "select" },
      options: classNames["padding-block"],
    },
    paddingInline: {
      control: { type: "select" },
      options: classNames["padding-inline"],
    },
    backgroundColor: {
      control: { type: "select" },
      options: classNames["background-color"],
    },
    borderWidth: {
      control: { type: "select" },
      options: classNames["border-width"],
    },
    borderColor: {
      control: { type: "select" },
      options: classNames["border-color"],
    },
    borderStyle: {
      control: { type: "select" },
      options: classNames["border-style"],
    },
    borderRadius: {
      control: { type: "select" },
      options: classNames["border-radius"],
    },
    overflow: {
      control: { type: "select" },
      options: classNames["overflow"],
    },
    opacity: {
      control: { type: "select" },
      options: classNames["opacity"],
    },
    zIndex: {
      control: { type: "select" },
      options: classNames["z-index"],
    },
    textColor: {
      control: { type: "select" },
      options: classNames["color"],
    },
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
  paddingBlock: "padding:10",
  paddingInline: "padding:5",
  borderColor: "border-color:blue-400",
  backgroundColor: "background-color:blue-200",
  borderStyle: "border-style:solid",
  borderWidth: "border-width:2",
  borderRadius: "border-radius:3",
  overflow: "overflow:initial",
  opacity: "opacity:1000",
  zIndex: "z-index:100",
};

const colors = [
  "neutral",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "purple",
  "pink",
];
const values = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

export const Colors: ComponentStory<typeof Box> = () => (
  <Stack gap="gap:2">
    {colors.map((color: string) => (
      <Inline gap="gap:2">
        {values.map((value: string) => (
          <Box
            padding="padding:20"
            backgroundColor={`background-color:${color}-${value}`}
          ></Box>
        ))}
      </Inline>
    ))}
  </Stack>
);

export const Opacity: ComponentStory<typeof Box> = () => (
  <Inline gap="gap:10">
    {classNames["opacity"].map((value: string) => (
      <Stack alignItems="align-items:center">
        <Text>{value}</Text>

        <Box
          backgroundColor="background-color:neutral-900"
          padding="padding:30"
          opacity={value}
        ></Box>
      </Stack>
    ))}
  </Inline>
);

export const BorderRadius: ComponentStory<typeof Box> = () => (
  <Grid
    gap="gap:5"
    justifyContent="justify-content:center"
    gridTemplateColumns="grid-template-columns:three-column-layout"
  >
    {classNames["border-radius"].map((value: string) => (
      <Box display="display:flex">
        <Box
          backgroundColor="background-color:green-600"
          padding="padding:30"
          borderRadius={value}
        >
          {value}
        </Box>
      </Box>
    ))}
  </Grid>
);
