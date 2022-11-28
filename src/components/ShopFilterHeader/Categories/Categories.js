import React, { useEffect, useState } from "react";
import Container from "../../../UI/Container/Container";
import CategoryListButton from "./CategoryListButton/CategoryListButton";

import { getApiData } from "../../../helper";

import styles from "./Categories.module.css";

const Categories = ({ isActive, onCategoryChange }) => {
  const [categories, setCategories] = useState(null);

  const [t, setT] = useState(false);
  useEffect(() => {
    async function getResult() {
      const data = await getApiData(
        "https://fakestoreapi.com/products/categories"
      );

      setCategories(data);
    }

    getResult();
  }, []);

  const hanldeUlClick = (e) => {
    const clicked = e.target.closest("li");
    // get the parent element of the clicked button

    if (!clicked) return;

    const category = clicked.dataset.category;
    onCategoryChange(category);
  };
  return (
    <>
      {isActive ? (
        <Container className={styles["categories-container"]}>
          <ul className={styles["categories-lists"]} onClick={hanldeUlClick}>
            {categories.map((i) => (
              <CategoryListButton key={i} category={i}>
                {i}
              </CategoryListButton>
            ))}
          </ul>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default Categories;
