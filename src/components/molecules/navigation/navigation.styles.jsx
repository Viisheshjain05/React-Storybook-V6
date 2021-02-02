import styled from "styled-components";

const StyledNavigation = styled.nav({
  display: "flex",
  padding: "24px",
  flexDirection: (props) =>
    props.direction === "horizontal" ? "column" : "row",
  //   backgroundColor: "lightBlue",
  marginLeft: "10px",
  //   *+*{
  //   }
});

export default StyledNavigation;
