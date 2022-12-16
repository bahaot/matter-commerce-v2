import React from "react";
import styles from "./AboutTextBox.module.css"

const AboutTextBox = () => {
  return (
    <div className={styles["about-text-box"]}>
      <p className={styles["about-description"]}>
        Our mission is threefold - to foster designer-artisan collaborations,
        inspire consumers to value provenance and process, and pioneer industry
        change and sustainability for rural textile communities.{" "}
      </p>

      <div className={styles["about-infos"]}>
        <p className={styles["about-infos-title"]}>Artisan Employment Days Created</p>
        <ul className={styles["about-infos-lists"]}>
          <li>123456</li>
        </ul>
      </div>
      <div className={styles["about-infos"]}>
        <p className={styles["about-infos-title"]}>Countries Involved To Date</p>
        <ul className={styles["about-infos-lists"]}>
          <li>india</li>
          <li>China</li>
          <li>Sri Lanka</li>
        </ul>
      </div>
      <div className={styles["about-infos"]}>
        <p className={styles["about-infos-title"]}>#MatterTribe </p>
        <ul className={styles["about-infos-lists"]}>
          <li>12 designers</li>
          <li>12 Factories</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutTextBox;
