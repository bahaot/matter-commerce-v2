import React from "react";

import styles from "./SliderTextBox.module.css";

const SliderTextBox = ({ isNeedBoxForText }) => {
  return (
    <div
      className={`${styles["slider-text__box"]} ${
        isNeedBoxForText ? styles["slider-text__show"] : ""
      }`}
    >
      <h1 className={styles["heading-slider"]}>Perfume Tips Tricks</h1>
      <a className={styles["slider-link"]}>SHOP NOW</a>
    </div>
  );
};

export default SliderTextBox;
