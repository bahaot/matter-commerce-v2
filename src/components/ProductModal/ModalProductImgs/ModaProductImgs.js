import React, { useState } from "react";

import styles from "./ModalProductImgs.module.css";

const ModaProductImgs = ({ images }) => {
  const [imgs, setImages] = useState(images);
  const [aciveImgIndex, setActiveImgIndex] = useState(0);

  const hanldeActiveImg = (e) => {
    const index = e.target.dataset.index;
    if (!index) return;
    setActiveImgIndex(index);
  };
  return (
    <div className={styles["modal-product__imgs"]}>
      <div className={styles["modal-imgs__box"]} onClick={hanldeActiveImg}>
        {imgs.map((src, index) => {
          return (
            <img
              src={src}
              className={`${styles["modal-imgs__img"]}`}
              data-index={index}
            />
          );
        })}
      </div>
      <div className={styles["img-active"]}>
        <img src={images[aciveImgIndex]} />
      </div>
    </div>
  );
};

export default ModaProductImgs;
