import React from "react";
import Anchor from "./anchor.jsx";

export default {
  title: "atoms/Anchor",
  component: Anchor,
  argTypes: {
    children: { control: "text" },
    style: { control: {} },
  },
  args: {
    children: "",
  },
};

const Template = (args) => <Anchor {...args} />;

//* USING ARGS

export const largeTemplate = Template.bind({});
largeTemplate.args = {
  children: "Anchor",
  style: { color: "orange", padding: ".10em", fontSize: "2em" },
};
largeTemplate.storyName = "Anchor Links";

export const normalAnchor = Template.bind({});
normalAnchor.args = {
  variant: "link",
  children: "feature Anchor",
  style: {},
};
