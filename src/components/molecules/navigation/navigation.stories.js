import React from "react";
import Navigation from "./navigation.jsx";
import controls from "./navigation.controls.json";

const { items } = controls;

export default {
  title: "molecule/Navigation",
  component: Navigation,
  argTypes: {
    direction: {
      control: {
        type: "select",
        options: ["verticle", "horizontal"],
      },
    },
    // count: { control: { type: "number", min: 0, max: 10 } },
  },
};

const Template = (args) => <Navigation {...args}></Navigation>;

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "horizontal",
  items: items.options[0],
  count: 2,
  btnStyle: { color: "black", fontSize: "1.2em" },
  btnVariant: "link",
};
Vertical.storyName = "Create Custom Navigation";

export const PrimaryNavigation = Template.bind({});
PrimaryNavigation.args = {
  direction: "verticle",
  items: items.options,
  btnVariant: "link",
};

// Button Variant of Todoist Navbar
// return (
//   <>
//     <div style={{ display: "flex", justifyContent: "space-around" }}>
//       <Button
//         variant="link"
//         icon={envelope}
//         style={{ fontSize: "1.8em", color: "red", fontWeight: "700" }}
//       >
//         todoist
//       </Button>

//       <Button variant="link"> feature </Button>
//       <Button variant="link"> premium </Button>
//       <Button variant="link"> for team </Button>
//       <Button variant="link"> resources </Button>

//       <div style={{ textAlign: "right", flex: "1", marginTop: "8px" }}>
//         <Button variant="link"> login </Button>
//         <Button variant="link" style={{ color: "red" }}>
//           signup
//         </Button>
//       </div>
//     </div>

//     {/* <Button variant="link">resources</Button> */}
//   </>
// );
