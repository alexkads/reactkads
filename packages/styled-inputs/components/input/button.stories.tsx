import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Input } from ".";

export default {
  title: "Input",
  component: Input,
} as Meta;

const Template: Story<ComponentProps<typeof Input>> = args => (
  <Input {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {};
