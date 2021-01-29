import React from "react";
import "./input.css"

const Input = (props) => {
  const { variant = "medium", children, ...rest } = props;
  return (
    <input
      type="text"
      className={`input input--${variant}`}
      {...rest}
      value={children}
    />
  );
};

export default Input;
