import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

import styles from "./CategoryListButton.module.css";

const CategoryListButton = ({ children, className, category }) => {
  const liClasses = `${styles["category-list__item"]} ${className}`;
  return (
    <li className={liClasses} data-category={category}>
      <button className={styles["list-button"]}>
        {children}
        <ChevronDownIcon className={styles.icon} />
      </button>
    </li>
  );
};

export default CategoryListButton;
