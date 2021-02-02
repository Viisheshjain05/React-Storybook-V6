
import React from "react";
import Button from "./button.jsx";

import envelope from "./img/envelope.svg";
import search from "./img/search.svg";
import user from "./img/user.svg";

export default {
  title: "atoms/Button",
  component: Button,

  //* ArgTypes
  argTypes: {
    children: { control: "text" },
    style: { control: {} },
    icon: {
      control: {
        type: "select",
        options: [null, envelope, user, search],
      },
    },
    // backgroundColor: { control: 'color' },
    // borderWidth: { control: { type: "number", min: 0, max: 10 } },
  },

  //* Global Args Btn
  args: {
    children: "",
  },
};

const Template = (args) => <Button {...args} />;

//* USING ARGS
export const largeTemplate = Template.bind({});
largeTemplate.args = {
  children: "Button",
  style: { color: "orange", padding: ".10em", fontSize: "2em" },
};
largeTemplate.storyName = "TryOptionBtn";

//* For Todoist

export const LinkBtn = Template.bind({});
LinkBtn.args = {
  variant: "link",
  children: "feature Button",
  style: {},
};

export const icon = Template.bind({});
icon.args = {
  variant: "custom",
  icon: envelope,
};

//* ADD VARIANTS OF STORIES INTO STORYBOOK
// export const Primary = () => (
//   <Button variant="primary">Primary btn New </Button>
// );
// export const Secondary = () => (
//   <Button variant="secondary">Secondary btn New </Button>
// );
// export const Tersiary = () => (
//   <Button variant="tersiary">tersiary btn New </Button>
// );

//* RENAME STORIES
// Primary.storyName = "Main Form";
