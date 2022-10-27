import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";


import ModalProductHeader from "./ModalProductHeader/ModalProductHeader";
import ModalDetailsHeader from "./ModalDetailsHeader/ModalDetailsHeader";
import ModalDetailsDescription from "./ModalDetailsDescription/ModalDetailsDescription";
import ModalDetailsList from "./ModalDetailsList/ModalDetailsList";
import ModalSelectorBox from "./ModalSelectorBox/ModalSelectorBox";

import styles from "./ProductModal.module.css";

const ProductModal = ({ onCloseModal, product }) => {
  const handleCloseModal = () => {
    onCloseModal();
  };
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-product"]}>
        <ModalProductHeader onCloseModal={handleCloseModal} />
        <div className={styles["modal-product__details"]}>
          <ModalDetailsHeader />
          <ModalDetailsDescription />
          <ModalDetailsList />
          <ModalSelectorBox />
          <div className={styles["modal-details__actions"]}>
            <div className={styles["modal-actions__quantity"]}>
              <label for="product-quantity">Quantity</label>
              <input type="number" id="product-quantity" />
            </div>
            <button className={styles["modal-actions__cart"]}>
              ADD TO CART
            </button>
            <div className={styles["modal-actions__wish"]}>
              <button className={styles["modal-wish__button"]}>
                <span>
                  <QuestionMarkCircleIcon />
                </span>
                ADD TO WISHLIST
              </button>
            </div>
          </div>
        </div>
        <div className={styles["modal-product__imgs"]}></div>
      </div>
    </div>
  );
};

export default ProductModal;
