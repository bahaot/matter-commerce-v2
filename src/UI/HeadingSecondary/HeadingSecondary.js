import React from "react";

import styles from "./HeadingSecondary.module.css";

const HeadingSecondary = ({ className, children }) => {
  const classes = `${styles["heading-secondary"]} ${className || ""}`;
  return <h2 className={classes}>{children}</h2>;
};

export default HeadingSecondary;
