import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextInput from "./index";
import Button from "../Button";
import Inline from "../Inline";

export default {
  title: "TextInput",
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

export const Basic: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Form: ComponentStory<typeof TextInput> = (args) => (
  <form>
    <Inline gap="gap:10">
      <TextInput />
      <Button>Submit</Button>
    </Inline>
  </form>
);
