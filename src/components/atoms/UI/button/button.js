import React from "react";
import { node, func, oneOf, object } from "prop-types";
import "./button.css";

const Button = (props) => {
  const { variant = "primary", children, style, ...rest } = props;
  return (
    <>
      <button className={`btn btn-${variant}`} style={style} {...rest}>
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  variant: oneOf(["primary", "secondary", "tersiary"]),
  children: node.isRequired,
  onClick: func,
  style: object,
};


export default Button;
