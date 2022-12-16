import React from "react";
import styles from './AboutImg.module.css'

const AboutImg = () => {
  return (
    <div className={styles["about-img-box"]}>
      <img src="./imgs/about.png" />
    </div>
  );
};

export default AboutImg;
