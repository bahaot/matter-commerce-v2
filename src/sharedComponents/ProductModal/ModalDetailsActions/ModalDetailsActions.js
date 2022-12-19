import React, { useState } from "react";
import {
  QuestionMarkCircleIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";

import styles from "./ModalDetailsActions.module.css";

const ModalDetailsActions = ({ quantityInStock, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((prevState) => (prevState -= 1));
  };
  const increaseQuantity = () => {
    if (quantity > quantityInStock) return;
    setQuantity((prevState) => (prevState += 1));
  };

  const handleOnAddToCart = () => {
    onAddToCart(quantity);
  };

  return (
    <>
      <label
        for="product-quantity"
        className={styles["product-quantity__title"]}
      >
        Quantity
      </label>
      <div className={styles["modal-details__actions"]}>
        <div className={styles["modal-actions__quantity"]}>
          <div className={styles["product-quantity__box"]}>
            <button onClick={decreaseQuantity}>
              <MinusIcon className={styles.icon} />
            </button>
            <input type="text" id="product-quantity" value={quantity} />
            <button onClick={increaseQuantity}>
              <PlusIcon className={styles.icon} />
            </button>
          </div>
        </div>
        <button
          className={styles["modal-actions__cart"]}
          onClick={handleOnAddToCart}
        >
          ADD TO CART
        </button>
        <div className={styles["modal-actions__wish"]}>
          {" "}
          <span>
            <QuestionMarkCircleIcon className={styles.icon} />
          </span>
          <button className={styles["modal-wish__button"]}>
            ADD TO WISHLIST
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsActions;
