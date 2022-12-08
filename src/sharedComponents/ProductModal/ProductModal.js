import React from "react";
import ReactDOM from "react-dom";

import ModalProductHeader from "./ModalProductHeader/ModalProductHeader";
import ModalDetailsHeader from "./ModalDetailsHeader/ModalDetailsHeader";
import ModalDetailsDescription from "./ModalDetailsDescription/ModalDetailsDescription";
import ModalDetailsList from "./ModalDetailsList/ModalDetailsList";
import ModalSelectorBox from "./ModalSelectorBox/ModalSelectorBox";

import styles from "./ProductModal.module.css";
import ModalDetailsActions from "./ModalDetailsActions/ModalDetailsActions";
import ModaProductImgs from "./ModalProductImgs/ModaProductImgs";

const OverLayProduct = ({ product, handleCloseModal, onAddToCart }) => {
  const handleAddToCart =  (quantity) => {
    onAddToCart(product, quantity);
  }
  
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-product"]}>
        <ModalProductHeader
          onCloseModal={handleCloseModal}
          subtitle={product.category}
        />
        <div className={styles["modal-product__details"]}>
          <ModalDetailsHeader
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
          <ModalDetailsDescription description={product.description} />
          <ModalDetailsList lists="no data" />
          <ModalSelectorBox />
          <ModalDetailsActions quantityInStock={product.rating.count} onAddToCart={handleAddToCart} />
        </div>
        <ModaProductImgs image={product.image} />
      </div>
    </div>
  );
};

const ProductModal = ({ onCloseModal, product, onAddToCart }) => {
  const handleCloseModal = () => {
    onCloseModal();
  };
  
  // const obj = {
  //   id: 3,
  //   title: "Samsung Universe 9",
  //   description:
  //     "Samsung's new variant which goes beyond Galaxy to the Universe",
  //   price: 1249,
  //   discountPercentage: 15.46,
  //   rating: 4.09,
  //   stock: 36,
  //   brand: "Samsung",
  //   category: "smartphones",
  //   thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
  //   images: ["https://dummyjson.com/image/i/products/3/1.jpg"],
  // };

  return ReactDOM.createPortal(
    <OverLayProduct product={product} handleCloseModal={handleCloseModal} onAddToCart={onAddToCart} />,
    document.getElementById("modal-product")
  );
};

export default ProductModal;
