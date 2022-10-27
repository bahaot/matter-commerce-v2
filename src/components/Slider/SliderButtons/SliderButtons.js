import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import styles from "./SliderButtons.module.css";

const SliderButtons = ({ imgIndex, onNextSlide, onPrevSlide }) => {
  return (
    <div className={styles["buttons-slider"]}>
      <button
        className={`${styles["btn-slider"]} ${styles["btn-slider__left"]}`}
        onClick={(e) =>
          onPrevSlide(e, e.target.closest(`.${styles["btn-slider"]}`))
        }
        data-index={`${imgIndex}`}
      >
        <ChevronLeftIcon className={styles["icon-btn__slider"]} />
      </button>
      <button
        className={`${styles["btn-slider"]} ${styles["btn-slider__right"]} `}
        onClick={(e) =>
          onNextSlide(e, e.target.closest(`.${styles["btn-slider"]}`))
        }
        data-index={`${imgIndex}`}
      >
        <ChevronRightIcon className={styles["icon-btn__slider"]} />
      </button>
    </div>
  );
};

export default SliderButtons;
