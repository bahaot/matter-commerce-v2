import React, { useState } from "react";

import HeadingTernary from "../../../UI/HeadingTernary/HeadingTernary";
import { StarIcon } from "@heroicons/react/24/outline";
import styles from "./ModalDetailsHeader.module.css";

const ModalDetailsHeader = ({ title, price, rating }) => {
  const raitngArr = [];
  const ratingRounded = Math.round(rating);

  for (let i = 0; i <= ratingRounded; i++) {
    if (i < ratingRounded) {
      raitngArr.push(<StarIcon className={styles["star-active"]} />);
      continue;
    }
    raitngArr.push(<StarIcon className={styles.star} />);
  }
  return (
    <div className={styles["modal-details__header"]}>
      <HeadingTernary className={styles["modal-header__title"]}>
        {title}
      </HeadingTernary>
      <div className={styles["modal-header__details"]}>
        <p className={styles["modal-header__price"]}>USD {price}</p>
        <div className={styles["modal-header__rating"]}>{raitngArr}</div>
      </div>
    </div>
  );
};

export default ModalDetailsHeader;
