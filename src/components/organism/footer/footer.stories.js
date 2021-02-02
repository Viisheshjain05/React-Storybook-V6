import React from "react";
import Footer from "./footer.jsx";

export default {
  title: "Organism/Footer",
  component: Footer,
  argTypes: {},
};

const Template = (args) => <Footer {...args} />;

export const footer = Template.bind({});

footer.args = {
  children: "Hii Child",
};
