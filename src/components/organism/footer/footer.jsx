// TODOS in Footer
// * complete basic setup for footer first add logic and stories to and structure to respective files.

//? Fetures
// Add Logo Options in center ||optional
// Add Links To [FB, twitter, ...rest] and svgs to get the easy connectivity to point if wanted  ||optional
// Adjust the content view or styles UI To get more of synchronised views
// And Better copyright and newslatter

import React from "react";
import PropsTypes from "prop-types";

import Navigation from "../../molecules/navigation/navigation";
import { StyledFooter } from "./footer.style.jsx";

const Footer = (props) => {
  const { menu } = props;
  return (
    <StyledFooter>
      {menu.map((props) => {
        console.log(props, "Menu");

        return (
          <div className="menu" key={Date.Now}>
            <h3 className="menu__items"> {props.label}</h3>
            <Navigation
              direction="vertical"
              items={{ children: props.btnChild }}
              count="1" // Needed Because we are rendering only one obj
            ></Navigation>
          </div>
        );
      })}

      <h4 className="copywight__text">
        copywrite &copy; to {props.authorName}
      </h4>
      <div>Join Our NewsLatter </div>
    </StyledFooter>
  );
};

Footer.defaultProps = {
  authorName: "ViisheshJain",
};

Footer.propTypes = {
  menu: PropsTypes.arrayOf(
    PropsTypes.shape({
      label: PropsTypes.string.isRequired,
      btnChild: PropsTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
