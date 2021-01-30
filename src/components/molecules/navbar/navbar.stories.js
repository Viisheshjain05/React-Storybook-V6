import React from "react";
import Navbar from "./navbar";
import { Primary } from "../../atoms/UI/button/button.stories";
import { Large } from "../../atoms/UI/input/input.stories";

export default {
  title: "Atomics/Subscription",
};

export const PrimarySubs = () => (
  <>
    <div style={{ display: "block" }}>
      <Primary />
    </div>
    <Large />
    <Large />
    <Large />
  </>
);

export const NavbarINJS = () => <Navbar> </Navbar>;
