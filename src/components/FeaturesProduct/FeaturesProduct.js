import React, { useState } from "react";
import Container from "../../UI/Container/Container";
import HeadingSecondary from "../../UI/HeadingSecondary/HeadingSecondary";
import ProductModal from "../ProductModal/ProductModal";

import styles from "./FeaturesProduct.module.css";

import Product from "./Product/Product";

const FeaturesProduct = ({ comingProducts }) => {
  const [productState, setProductsState] = useState({
    products: comingProducts.slice(0, 8),
    modalIndex: 0,
    isModalOpen: false,
  });

  const { products, modalIndex, isModalOpen } = productState;
  console.log(products);

  const handleModal = (e, i) => {
    setProductsState((prevState) => {
      return { ...prevState, isModalOpen: true, modalIndex: i };
    });
  };

  const handleCloseModal = () => {
    setProductsState((prev) => {
      return { ...prev, isModalOpen: false };
    });
  };

  const titleSection = "Featured";
  return (
    <section>
      <Container>
        <HeadingSecondary>{titleSection}</HeadingSecondary>
        <div className={styles["contianer-products__grid"]}>
          {products.map((p, i) => {
            return (
              <Product
                key={p.id}
                indexInTheArray={i}
                labelTitle={p.category}
                title={p.title}
                img={p.images[0]}
                price={p.price}
                onHandleModal={handleModal}
              />
            );
          })}
        </div>
      </Container>

      {isModalOpen ? (
        <ProductModal
          onCloseModal={handleCloseModal}
          product={products[modalIndex]}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default FeaturesProduct;
