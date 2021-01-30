import React from "react";
import Button from "./button";

export default {
  title: "Form/Button",
  component: Button,
};

const Template = (args) => <Button variant="" {...args} />;

// ADD VARIANTS OF STORIES INTO STORYBOOK
export const Primary = () => (
  <Button variant="primary">Primary btn New </Button>
);
export const Secondary = () => (
  <Button variant="secondary">Secondary btn New </Button>
);
export const Tersiary = () => (
  <Button variant="tersiary">tersiary btn New </Button>
);

// RENAME STORIES

Primary.storyName = "Main Form";

// USING ARGS

export const largeTemplate = Template.bind({});

largeTemplate.args = {
  // variant: "",
  children: "Large",
  style: { color: "orange", padding: "2em" },
};
