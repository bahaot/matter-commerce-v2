import React, { useState } from "react";

import SubHeading from "../../../UI/SubHeading/SubHeading";

import styles from "./ModalDetailsDescription.module.css";

const ModalDetailsDescription = ({ description }) => {
  const [seeMore, setSeeMore] = useState(false);
  const fullContent = description;
  let content = "";
  if (fullContent.length < 30) {
    content = description;
  } else {
    content = description.slice(0, 30);
  }

  return (
    <div className={styles["modal-details__description"]}>
      <SubHeading className={styles["modal-product__subheading"]}>
        description
      </SubHeading>
      <p className={styles["modal-description__text"]}>
        {seeMore ? (
          <button onClick={() => setSeeMore(false)}>
            {fullContent} <span>see less</span>
          </button>
        ) : (
          <button onClick={() => setSeeMore(true)}>
            {content} <span>see more</span>
          </button>
        )}
      </p>
    </div>
  );
};

export default ModalDetailsDescription;
