import React from "react";

import SubHeading from "../../../UI/SubHeading/SubHeading";

import styles from "./ModalDetailsList.module.css";

const ModalDetailsList = () => {
  return (
    <div className={styles["modal-details__list"]}>
      <div className={styles["modal-list__item"]}>
        <SubHeading className={styles["modal-product__subHeading"]}>
          Artisan Employment
        </SubHeading>
        <span className={styles["modal-list__data"]}>54 jobs</span>
      </div>
      <div className={styles["modal-list__item"]}>
        <SubHeading className={styles["modal-product__subHeading"]}>
          Artisan Employment
        </SubHeading>
        <span className={styles["modal-list__data"]}>54 jobs</span>
      </div>
      <div className={styles["modal-list__item"]}>
        <SubHeading className={styles["modal-product__subHeading"]}>
          In Collab
        </SubHeading>
        <span className={styles["modal-list__data"]}>Augusta Mendoza</span>
      </div>
    </div>
  );
};

export default ModalDetailsList;
