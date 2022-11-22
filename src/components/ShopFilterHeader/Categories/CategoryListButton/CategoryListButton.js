import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

import styles from "./CategoryListButton.module.css";

const CategoryListButton = ({ children, className }) => {
  const liClasses = `${styles["category-list__item"]} ${className}`;
  return (
    <li className={liClasses}>
      <button className={styles["list-button"]}>
        {children}
        <ChevronDownIcon className={styles.icon} />
      </button>
    </li>
  );
};

export default CategoryListButton;
