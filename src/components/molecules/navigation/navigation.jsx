import React from "react";
import Button from "../../atoms/button/button.jsx";
import StyledNavigation from "./navigation.styles.jsx";
import PropTypes from "prop-types";

// NavigationTesting Component
const Navigation = (props) => {
  const { direction, items, count, btnStyle, btnVariant } = props;

  const CountCall = (items) => {
    const itemArr = [];
    
    for (let i = 0; i < count; i++) {
      itemArr.push(
        <Button key={i} variant={btnVariant} style={btnStyle} href={items.url}>
          {items.children}
        </Button>
      );
    }
    if (count === undefined) {
      // Error Checking Start
      if (typeof(item) != Array) {
        console.warn("With Single object You Need to add count property or create a array")
      }
      // Error Checking End
        const newItem = items.map((items, index) => (
          <Button key={index} variant="link" href={items.url}>
          {items.children}
        </Button>
      ));
      return newItem;
    }
    return itemArr;
  };

  return (
    <>
      <StyledNavigation direction={direction}>
        {items ? CountCall(items) : null}
      </StyledNavigation>
    </>
  );
};

export default Navigation;

Navigation.propTypes = {
  direction: PropTypes.string.isRequired,
  btnVariant: PropTypes.string,
  items: PropTypes.oneOfType([
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      url: PropTypes.string,
    }),

    PropTypes.arrayOf(
      PropTypes.shape({
        children: PropTypes.string.isRequired,
        url: PropTypes.string,
      })
    ),
  ]),
  // count: PropTypes.number,
  // btnStyle: PropTypes.object,
};

Navigation.defaultProps = {
  direction: "Verticle",
  btnVariant: "link",
};

// Orignal Navigation Component
// const NavigationOrign = (props) => {
//   const { direction, items, count } = props;

//   return (
//     <>
//       <StyledNavigation direction={direction}>
//         {items
//           ? items.map((items) => (
//               <Button variant="link" href={items.url}>
//                 {items.children}
//               </Button>
//             ))
//           : null}
//       </StyledNavigation>
//     </>
//   );
// };

// export default NavigationOrign;

// Orignal Code
// <Navigation
//   btnStyle={{
//     color: "red",
//     fontSize: "1em",
//   }}
//   direction="verticle"
//   items={[
//     { children: "home",
//       url: "#",
//     },
//     {
//       children: "home",
//       url: "#",
//     },
//     {
//       children: "home",
//       url: "#",
//     },
//   ]}
// />;
