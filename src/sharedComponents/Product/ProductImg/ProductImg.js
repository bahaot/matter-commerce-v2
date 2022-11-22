import React from "react";

import styles from "./ProductImg.module.css";

const ProductImg = ({ imgSrc }) => {
  return (
    <div className={styles["product-img__box"]}>
      <img src={imgSrc} />
    </div>
  );
};

export default ProductImg;
