import React from "react";
import styles from "./RelativeDiv.module.css";

const RelativeDiv = ({ className, children }) => {
  const classes = `${styles.relative} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default RelativeDiv;
