import React from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";

import SubHeading from "../../../UI/SubHeading/SubHeading";

import styles from "./ModalProductHeader.module.css";

const ModalProductHeader = ({ onCloseModal, subtitle }) => {
  return (
    <div className={styles["modal-product__header"]}>
      <SubHeading className={styles["modal-product__subheading"]}>
        {subtitle}
      </SubHeading>
      <button onClick={onCloseModal}>
        <XMarkIcon className={styles["modal-header__close"]} />
      </button>
    </div>
  );
};

export default ModalProductHeader;
