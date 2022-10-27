import React from "react";

import styles from "./SubHeading.module.css";

const SubHeading = ({ className, children }) => {
  const classes = `${styles.subheading} ${className}`;
  return (
    <p role="doc-subtitle" className={classes}>
      {children}
    </p>
  );
};

export default SubHeading;
