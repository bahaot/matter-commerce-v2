import React, { useEffect, useState } from "react";
import Container from "../../UI/Container/Container";
import HeadingSecondary from "../../UI/HeadingSecondary/HeadingSecondary";
import ProductModal from "../../sharedComponents/ProductModal/ProductModal";

import styles from "./FeaturesProduct.module.css";

import Product from "../../sharedComponents/Product/Product";
import { getApiData } from "../../helper";

const FeaturesProduct = ({ onAddToCart }) => {
  const [productState, setProductsState] = useState({});
  // initialize it with object to make the destructuring work

  const [loaadApi, setLoadApi] = useState(false);

  useEffect(() => {
    async function getApi() {
      let isMounted = true;
      if (isMounted) {
        const result = await getApiData(
          "https://fakestoreapi.com/products?limit=8"
        );

        setProductsState({
          products: result,
          modalIndex: 0,
          isModalOpen: false,
        });

        setLoadApi(true);

        isMounted = false;
      }
    }

    getApi();
  }, [loaadApi]);

  const { products = [], modalIndex = 0, isModalOpen = false } = productState;

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
                img={p.image}
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
          onAddToCart={onAddToCart}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default FeaturesProduct;
