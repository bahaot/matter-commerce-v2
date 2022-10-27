import React from "react";

import RelativeDiv from "../../../UI/RelativeDiv/RelativeDiv";

import ProductImg from "./ProductImg/ProductImg";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductLabel from "./ProductLabel/ProductLabel";
import ProductButton from "./ProductButton/ProductButton";

import styles from "./Product.module.css";

const Product = ({
  indexInTheArray,
  labelTitle,
  title,
  img,
  price,
  onHandleModal,
}) => {
  const handleQuickViewClick = (e, index) => {
    onHandleModal(e, index);
  };
  return (
    <RelativeDiv className={styles.product}>
      <ProductImg imgSrc={img} />
      <ProductDescription title={title} price={price} />
      <ProductLabel content={labelTitle} />
      <ProductButton
        onQuickViewClick={(e) => handleQuickViewClick(e, indexInTheArray)}
      />
    </RelativeDiv>
  );
};

export default Product;
