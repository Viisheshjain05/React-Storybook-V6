import React from "react";
import "./button.css";

// import { node, func, oneOf, object, string } from "prop-types";
import prty from "prop-types";

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
  variant: prty.oneOf(["primary", "secondary", "tersiary", "link", "custom"]),
  children: prty.node,
  onClick: prty.func,
  style: prty.object,
  icon: prty.string,
};

Button.defaultProps = {
  variant: "primary",
  children: "",
};

export default Button;
