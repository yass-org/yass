import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "./index";
import Box from "../Box";

export default {
  title: "Grid",
  component: Grid,
  argTypes: {
    children: {
      control: "text",
    },
    gridTemplateColumns: { control: { type: "text" } },
    gap: { control: { type: "text" } },
    rowGap: { control: { type: "text" } },
    columnGap: { control: { type: "text" } },
  },
} as ComponentMeta<typeof Grid>;

export const ThreeColumnLayout: ComponentStory<typeof Grid> = (args) => (
  <Grid
    gap="gap:10"
    gridTemplateColumns="grid-template-columns:three-column-layout"
  >
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      One
    </Box>
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      Two
    </Box>
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      Three
    </Box>
  </Grid>
);

export const TwoColumnLayout: ComponentStory<typeof Grid> = (args) => (
  <Grid
    gap="gap:10"
    gridTemplateColumns="grid-template-columns:two-column-layout"
  >
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      One
    </Box>
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      Two
    </Box>
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      Three
    </Box>
  </Grid>
);

export const PageLayout: ComponentStory<typeof Grid> = (args) => (
  <Grid gap="gap:10" gridTemplateColumns="grid-template-columns:page-layout">
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      One
    </Box>
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      Two
    </Box>
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      Three
    </Box>
  </Grid>
);
