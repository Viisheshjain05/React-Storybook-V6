import React from "react";
import "./anchor.css";

import prty from "prop-types";

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
  variant: prty.oneOf(["primary", "secondary", "tersiary", "link", "custom"]),
  children: prty.node,
  onClick: prty.func,
  style: prty.object,
  icon: prty.string,
};

Anchor.defaultProps = {
  variant: "primary",
  children: "",
};

export default Anchor;
