import React, { useEffect, useState } from "react";

import Product from "../../sharedComponents/Product/Product";
import ProductModal from "../../sharedComponents/ProductModal/ProductModal";
import Container from "../../UI/Container/Container";

import { getApiData } from "../../helper";

import styles from "./ShopSectionProducts.module.css";

const ShopSectionProducts = ({ defaultApi, onAddToCart }) => {
  const [productState, setProductsState] = useState({});
  // initialize it with object to make the destructuring work

  const [loaadApi, setLoadApi] = useState(false);
  const [url, setUrl] = useState(defaultApi);

  useEffect(() => {
    async function getApi() {
      const result = await getApiData(url);

      setProductsState({
        products: result,
        modalIndex: 0,
        isModalOpen: false,
      });

      setLoadApi(true);
    }

    getApi();
  }, [loaadApi, url]);

  useEffect(() => {
    console.log(defaultApi);
    setUrl(defaultApi);
  }, [defaultApi]);

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

  return (
    <>
      <section className={styles['section-products']}>
        {loaadApi && (
          <Container className={styles["product-container"]}>
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
          </Container>
        )}
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
    </>
  );
};

export default ShopSectionProducts;
