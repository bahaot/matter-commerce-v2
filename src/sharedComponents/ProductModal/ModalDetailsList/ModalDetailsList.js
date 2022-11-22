import React from "react";

import SubHeading from "../../../UI/SubHeading/SubHeading";

import styles from "./ModalDetailsList.module.css";

const ModalDetailsList = ({ lists }) => {
  return (
    <div className={styles["modal-details__list"]}>
      <div className={styles["modal-list__item"]}>
        <SubHeading className={styles["modal-product__subHeading"]}>
        {lists}
        </SubHeading>
        <span className={styles["modal-list__data"]}>{lists}</span>
      </div>
      <div className={styles["modal-list__item"]}>
        <SubHeading className={styles["modal-product__subHeading"]}>
          {lists}
        </SubHeading>
        <span className={styles["modal-list__data"]}>{lists}</span>
      </div>
      <div className={styles["modal-list__item"]}>
        <SubHeading className={styles["modal-product__subHeading"]}>
          {lists}
        </SubHeading>
        <span className={styles["modal-list__data"]}>{lists}</span>
      </div>
    </div>
  );
};

export default ModalDetailsList;
