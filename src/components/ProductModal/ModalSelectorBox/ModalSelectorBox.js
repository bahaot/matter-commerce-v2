import React, { useRef, useState } from "react";

import SubHeading from "../../../UI/SubHeading/SubHeading";

import styles from "./ModalSelectorBox.module.css";

const ModalSelectorBox = () => {
  // saving the data of the product
  const [data, setData] = useState({
    selectedItem: "",
    quantity: "",
  });

  //   saving the data of the sizes or colors
  const [items, setItems] = useState([
    { id: 1, value: "1", isActive: false },
    { id: 2, value: "2", isActive: false },
    { id: 3, value: "3", isActive: false },
    { id: 4, value: "4", isActive: false },
    { id: 5, value: "5", isActive: false },
  ]);

  //   saving the last index to access items array as fast as possible without looping over and over again
  const [lastIndex, setLastIndex] = useState(null);

  const handleClick = (e) => {
    const clicked = e.target.closest("button");
    //    checking if the clicked item is exist
    if (!clicked) return;

    const currentIndex = clicked.dataset.index;

    let copy = [...items]; //
    // fast access to the array elements without looping over and over
    if (copy[lastIndex]) copy[lastIndex].isActive = false;
    copy[currentIndex].isActive = true;

    // editing the state
    setItems(copy);
    setLastIndex(currentIndex);
    setData((prevState) => {
      return {
        ...prevState,
        selectedItem: copy[currentIndex].value,
      };
    });
  };
  console.log(data);

  return (
    <div className={styles["modal-details__selector"]}>
      <SubHeading className={styles["modal-selector__title"]}>size</SubHeading>
      <div className={styles["modal-selector__box"]}>
        <div
          className={styles["modal-selector__radios"]}
          id="selectors"
          onClick={handleClick}
        >
          {items.map((item, index) => {
            return (
              <button
                key={item.id}
                data-index={index}
                className={item.isActive ? styles["select-active"] : ""}
              >
                <input
                  key={item.id}
                  type="radio"
                  name="size"
                  value={item.value}
                />
              </button>
            );
          })}
        </div>
        <label for="selectors">SIZE GUIDELINES</label>
      </div>
      <p className={styles["modal-selector__comment"]}>
        Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.
      </p>
    </div>
  );
};

export default ModalSelectorBox;
