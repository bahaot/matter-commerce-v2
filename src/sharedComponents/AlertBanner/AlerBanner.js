import React from "react";
import styles from "./AlertBanner.module.css";

const AlertBanner = () => {
  const alertContent = "Free shipping for orders above USD 150";
  return (
    <div className={styles["container-alert"]}>
      <p className={styles["title-alert"]}>{alertContent}</p>
    </div>
  );
};

export default AlertBanner;
