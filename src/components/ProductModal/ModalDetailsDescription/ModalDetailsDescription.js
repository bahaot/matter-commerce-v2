import React from "react";

import SubHeading from "../../../UI/SubHeading/SubHeading";

import styles from "./ModalDetailsDescription.module.css";

const ModalDetailsDescription = () => {
  return (
    <div className={styles["modal-details__description"]}>
      <SubHeading className={styles["modal-product__subheading"]}>
        description
      </SubHeading>
      <p className={styles["modal-description__text"]}>
        Inspired by the continuous length of the lunghi or sarong seen in hot
        climates everywhere from South Asia to the Horn of Africa and southern
        Arabian pen…
      </p>
    </div>
  );
};

export default ModalDetailsDescription;
