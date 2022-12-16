import React from "react";
import Container from "../../UI/Container/Container";
import HeadingSecondary from "../../UI/HeadingSecondary/HeadingSecondary";
import ShopCategory from "./ShopCategory/ShopCategory";
import styles from "./Shop.module.css";

const Shop = () => {
  const sectionTitle = "Shop";
  const shopCategories = [
    { title: "Pants", imgSrc: "imgs/shop/pants.png" },
    { title: "Jumpsuits", imgSrc: "imgs/shop/jumpsuits.png" },
    { title: "Tops", imgSrc: "imgs/shop/tops.png" },
    { title: "Accessories", imgSrc: "imgs/shop/accessories.png" },
  ];
  return (
    <section className={styles["section-shop"]}>
      <HeadingSecondary>{sectionTitle}</HeadingSecondary>
      <Container className={styles["shop-container"]}>
        {shopCategories.map((cat) => (
          <ShopCategory src={cat.imgSrc} title={cat.title} />
        ))}
      </Container>
    </section>
  );
};

export default Shop;
