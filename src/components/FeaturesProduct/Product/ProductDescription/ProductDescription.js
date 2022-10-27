import React from "react";
import SubHeading from "../../../../UI/SubHeading/SubHeading";
import HeadingTernary from "../../../../UI/HeadingSecondary/HeadingTernary/HeadingTernary";

import styles from "./ProductDescription.module.css";

const ProductDescription = ({ title, price }) => {
  return (
    <div className={styles["product-description__box"]}>
      <HeadingTernary className={styles["product-title"]}>
        {title}
      </HeadingTernary>
      <SubHeading className={styles["product-price"]}>${price}</SubHeading>
    </div>
  );
};

export default ProductDescription;
