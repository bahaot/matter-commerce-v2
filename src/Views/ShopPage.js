import React from "react";
import AlertBanner from "../sharedComponents/AlertBanner/AlerBanner";
import Header from "../sharedComponents/Header/Header";
import Slider from "../components/Slider/Slider";
import ShopFilterheader from "../components/ShopFilterHeader/ShopFilterheader";
import ShopSectionProducts from "../components/ShopSectionProducts/ShopSectionProducts";

const Shop = () => {
  return (
    <React.Fragment>
      <AlertBanner />
      <Header />
      <Slider />
      <ShopFilterheader />
      <ShopSectionProducts />
    </React.Fragment>
  );
};

export default Shop;
