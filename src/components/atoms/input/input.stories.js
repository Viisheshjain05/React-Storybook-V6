import React from "react";
import Input from "./input";

export default {
  title: "atoms/Input",
  component: Input,
  args:{
    children: "INPUT WITH GLOBAL ARGS"
  }
};

// export const Large = () => <Input variant="large"> large input </Input>;
// export const Medium = () => <Input variant="medium"> medium input </Input>;
// export const Small = () => <Input variant="small"> small input </Input>;

// USING ARGS

const Template = (args) => <Input {...args} />  ;

export const largeTemplate = Template.bind({});

largeTemplate.args = {
  variant: "large",
  children: "New Large",
};

// export const medTemplate = Template.bind({});

// medTemplate.args = {
//   variant: "medium",
//   // children: "New medium",
// };

// export const smallTemplate = Template.bind({});

// smallTemplate.args = {
//   ...largeTemplate.args,
//   // variant: "small",
//   children: "New Small Arg WIth Large",
// };
