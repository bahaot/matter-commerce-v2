import React, { useEffect, useState } from "react";

import { FunnelIcon } from "@heroicons/react/24/outline";
import styles from "./Sort.module.css";

const Sort = ({ onFunnelClick, isActive, onChangeSort }) => {
  const [sort, setSort] = useState("inc");
  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    onChangeSort(sort);
  }, [sort]);

  return (
    <div
      className={`${styles["filter-header__sort"]} ${
        isActive ? styles["active"] : ""
      }`}
    >
      <label>Sort by</label>
      <select value={sort} onChange={handleChangeSort}>
        <option value="desc">descendent</option>
        <option value="inc">indecendent</option>
      </select>
      <button className={styles["sort-button__mobile"]} onClick={onFunnelClick}>
        <FunnelIcon className={styles["icon"]} />
      </button>
    </div>
  );
};

export default Sort;
