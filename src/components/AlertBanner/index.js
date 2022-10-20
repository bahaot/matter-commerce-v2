import React from "react";
import classes from "./AlertBanner.module.css";

console.log(classes);
const AlertBanner = () => {
  const alertContent = "Free shipping for orders above USD 150";
  return (
    <div className={classes["container-alert"]}>
      <p className={classes["title-alert"]}>{alertContent}</p>
    </div>
  );
};

export default AlertBanner;
