import React, { useState } from "react";
import AlertBanner from "../sharedComponents/AlertBanner/AlerBanner";
import Header from "../sharedComponents/Header/Header";
import Slider from "../components/Slider/Slider";
import ShopFilterheader from "../components/ShopFilterHeader/ShopFilterheader";
import ShopSectionProducts from "../components/ShopSectionProducts/ShopSectionProducts";
import Footer from "../components/Footer/Footer";

const Shop = ({ cartProducts, onAddToCart, onDeleteProduct }) => {
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  // use this as default api call

  const handleChangeCategory = (category) => {
    setUrl(`https://fakestoreapi.com/products/category/${category}`);
  };
  // for controlling the change of the category

  const handleChangeSort = (sort) => {
    setUrl(`https://fakestoreapi.com/products?sort=${sort}`);
  };

  return (
    <React.Fragment>
      <AlertBanner />
      <Header
        cartProducts={cartProducts}
        onAddToCart={onAddToCart}
        onDeleteProduct={onDeleteProduct}
      />
      <Slider />
      <ShopFilterheader
        onChangeUrl={handleChangeCategory}
        onChangeSort={handleChangeSort}
      />
      <ShopSectionProducts defaultApi={url} onAddToCart={onAddToCart}/>
      <Footer />
    </React.Fragment>
  );
};

export default Shop;
