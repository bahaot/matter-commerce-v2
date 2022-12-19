import React, { useState } from "react";

import styles from "./ModalProductImgs.module.css";

const ModaProductImgs = ({ image }) => {
  const [imgs, setImages] = useState(image);
  const [aciveImgIndex, setActiveImgIndex] = useState(0);

  const hanldeActiveImg = (e) => {
    const index = e.target.dataset.index;
    if (!index) return;
    setActiveImgIndex(index);
  };
  return (
    <div className={styles["modal-product__imgs"]}>
      <div className={styles["modal-imgs__box"]} onClick={hanldeActiveImg}>
        <img src={image} className={`${styles["modal-imgs__img"]}`} />
      </div>
      <div className={styles["img-active"]}>
        <img src={image} className={styles['product-img']} />
      </div>
    </div>
  );
};

export default ModaProductImgs;
