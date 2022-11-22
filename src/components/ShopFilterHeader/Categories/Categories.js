import React, { useEffect, useState } from "react";
import Container from "../../../UI/Container/Container";
import CategoryListButton from "./CategoryListButton/CategoryListButton";

import { getApiData } from "../../../helper";

import styles from "./Categories.module.css";

const Categories = ({ isActive }) => {
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
  return (
    <>
      {isActive ? (
        <Container className={styles["categories-container"]}>
          <ul className={styles["categories-lists"]}>
            {categories.map((i) => (
              <CategoryListButton key={i} data-category={i}>
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
