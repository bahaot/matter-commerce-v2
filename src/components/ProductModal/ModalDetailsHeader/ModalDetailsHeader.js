import React from "react";

import HeadingTernary from "../../../UI/HeadingSecondary/HeadingTernary/HeadingTernary";

import styles from "./ModalDetailsHeader.module.css";

const ModalDetailsHeader = () => {
  return (
    <div className={styles["modal-details__header"]}>
      <HeadingTernary className={styles["modal-header__title"]}>
        product title
      </HeadingTernary>
      <div className={styles["modal-header__details"]}>
        <p className={styles["modal-header__price"]}>USD 139.90</p>
        <div className={styles["modal-header__rating"]}>
          ⭐⭐⭐⭐⭐ <span>5 of 5</span>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailsHeader;
