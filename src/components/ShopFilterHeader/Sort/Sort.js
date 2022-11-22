import React from "react";

import { FunnelIcon } from "@heroicons/react/24/outline";
import styles from "./Sort.module.css";

const Sort = ({ onFunnelClick, isActive }) => {
  return (
    <div
      className={`${styles["filter-header__sort"]} ${
        isActive ? styles["active"] : ""
      }`}
    >
      <label>Sort by</label>
      <select value="price1">
        <option value="price1">price</option>
        <option value="price2">price</option>
        <option value="price3">price</option>
      </select>
      <button className={styles["sort-button__mobile"]} onClick={onFunnelClick}>
        <FunnelIcon className={styles["icon"]} />
      </button>
    </div>
  );
};

export default Sort;
