import React from "react";
import Button from "../../atoms/button/button.jsx";
import StyledNavigation from "./navigation.styles.jsx";

// Importing SVGS
// import envelope from "./img/envelope.svg";
// import user from "./img/user.svg";
// import search from "./img/search.svg"

const Navigation = (props) => {
  const { direction, items, count } = props;

  const CountCall = (items) => {
    const itemArr = [];
    for (let i = 0; i < count; i++) {
      itemArr.push(
        <Button variant="link" href={items.url}>
          {items.children}
        </Button>
      );
    }
    if (count === 0) {
      const newItem = (
        <Button variant="link" href={items.url}>
          {items.children}
        </Button>
      );
      return newItem;
    }

    return itemArr;
  };

  return (
    <>
      <StyledNavigation direction={direction}>
        {/* {count && items
          ? CountCall(items)
          : items
          ? items.map((items) => (
              <Button variant="link" href={items.url}>
                {items.children}
              </Button>
            ))
          : null} */}

        {items ? CountCall(items) : null}
        {/* {items ? items.map((items) => CountCall) : null} */}
      </StyledNavigation>
    </>
  );
};

export default Navigation;
