import React from "react";
import styles from './ShopCategory.module.css'

const ShopCategory = (props) => {
  return (
    <div className={styles["card-shop"]}>
      <img src={props.src} />
      <div className={styles["card-title"]}>{props.title}</div>
    </div>
  );
};

export default ShopCategory;
