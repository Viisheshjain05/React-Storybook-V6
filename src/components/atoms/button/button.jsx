// Todo
// Remove Flex From Single Button Rendering 
// Create Diffent Components For [Anchor Tag, ...rest] or any other relevent tag do not mix in Button

import React from "react";
import "./button.css";

// import { node, func, oneOf, object, string } from "prop-types";
import PropTypes from "prop-types";

const Button = (props) => {
  const { variant = "primary", children, icon, style, ...rest } = props;
  return (
    <>
      <div className={`btn__group btn__group-${variant}`}>
        
        {icon ? (
          <img src={icon} alt="Costom icon" className="btn__icon" />
        ) : null}

        {children ? (
          <button className={` btn btn-${variant}`} style={style} {...rest}>
            {children}
          </button>
        ) : null}

      </div>
    </>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tersiary", "link", "custom"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object,
  icon: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  children: "",
};

export default Button;
