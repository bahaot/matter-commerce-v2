import React from "react";
import styles from "./ProductLabel.module.css";

const ProductLabel = ({ content }) => {
  return <span className={styles.label}>{content.toUpperCase()}</span>;
};

export default ProductLabel;
