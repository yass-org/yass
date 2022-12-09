import { ComponentStory, ComponentMeta } from "@storybook/react";

import Link, { target } from "./index";

export default {
  title: "Link",
  component: Link,
  argTypes: {
    children: { control: "text" },
    href: { control: "text" },
    target: { control: "select", options: target },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "#",
  children: "This is some text content",
};
