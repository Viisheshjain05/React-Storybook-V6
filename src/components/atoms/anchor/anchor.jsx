import React from "react";
import "./anchor.css";

import PropTypes from "prop-types";

const Anchor = (props) => {
  const { variant = "primary", children, icon, style, herf, ...rest } = props;
  return (
    <>
      <div className={`a__group a__group-${variant}`}>
        {icon ? <img src={icon} alt="Costom icon" className="a__icon" /> : null}

        {children ? (
          <a href={herf} className={` a a-${variant}`} style={style} {...rest}>
            {children}
          </a>
        ) : null}
      </div>
    </>
  );
};

Anchor.propTypes = {
  variant: PropTypes.oneOf([ "link", "custom"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object,
  icon: PropTypes.string,
};

Anchor.defaultProps = {
  variant: "primary",
  children: "",
};

export default Anchor;
