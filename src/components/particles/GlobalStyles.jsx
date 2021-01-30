import React from "react";
import { addDecorator } from "@storybook/react";

const GlobalStyles = (story) => <div>{story()}</div>;

addDecorator(GlobalStyles);

export default GlobalStyles;
