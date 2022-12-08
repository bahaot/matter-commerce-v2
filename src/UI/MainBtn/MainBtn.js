import React from "react";
import "./MainBtn.css";
const MainBtn = (props) => {
  const classes = `btn-main ${props.className || ""}`;
  return <button className={classes}>{props.children}</button>;
};

export default MainBtn;
