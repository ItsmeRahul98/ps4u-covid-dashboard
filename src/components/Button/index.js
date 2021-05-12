import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onBtnClick}>
      {props.title}
    </button>
  );
};

export default Button;
