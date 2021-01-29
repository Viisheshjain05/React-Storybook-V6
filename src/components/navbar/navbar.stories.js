import React from "react";
import { Primary } from "../UI/button/button.stories";
import { Large } from "../UI/input/input.stories";

export default {
  title: "Atomics/Subscription",
};

export const PrimarySubs = () => (
  <>
    <Primary />
    <Large />
  </>
);
