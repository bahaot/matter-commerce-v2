import React from "react";

import styles from "./ProductButton.module.css";

const ProductButton = ({ onQuickViewClick }) => {
  return (
    <button className={styles["btn-product"]} onClick={onQuickViewClick}>
      QUICK VIEW
    </button>
  );
};

export default ProductButton;
