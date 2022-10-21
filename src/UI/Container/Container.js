import React from "react";
import classes from "./Container.module.css";

const Container = ({ className, children }) => {
  const classesName = `${classes.container} ${className}`;
  return <div className={classesName}>{children}</div>;
};

export default Container;
