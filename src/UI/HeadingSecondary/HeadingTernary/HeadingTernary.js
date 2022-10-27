import React from "react";

import styles from "./HeadingTernary.module.css";

const HeadingTernary = ({ className, children }) => {
  const classes = `${styles["heading-ternary"]} ${className}`;

  return <h3 className={classes}>{children}</h3>;
};

export default HeadingTernary;
