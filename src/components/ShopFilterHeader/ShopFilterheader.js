import React, { useState } from "react";
import Container from "../../UI/Container/Container";
import styles from "./ShopFilterheader.module.css";
import Sort from "./Sort/Sort";
import Categories from "./Categories/Categories";

const ShopFilterheader = ({ onChangeUrl, onChangeSort }) => {
  const [isCategoriesActive, setIsCategoriesActive] = useState(false);

  const handleFunnelClick = () => {
    setIsCategoriesActive(!isCategoriesActive);
  };

  const handleCategoryChange = (category) => {
    onChangeUrl(category);
  };

  const handleSortChange = (sort) => {
    onChangeSort(sort);
  };

  return (
    <>
      <Container
        className={`${styles["filter-header__container"]} ${
          isCategoriesActive ? styles["active"] : ""
        }`}
      >
        <h3 className={styles["filter-header__heading"]}>category</h3>
        <Sort
          onFunnelClick={handleFunnelClick}
          onChangeSort={handleSortChange}
          isActive={isCategoriesActive}
        />
      </Container>
      <Categories
        isActive={isCategoriesActive}
        onCategoryChange={handleCategoryChange}
      />
    </>
  );
};

export default ShopFilterheader;
