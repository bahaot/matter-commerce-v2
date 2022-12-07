import React, { useState } from "react";
import AlertBanner from "../sharedComponents/AlertBanner/AlerBanner";
import Header from "../sharedComponents/Header/Header";
import Main from "../UI/Main";
import Slider from "../components/Slider/Slider";

import FeaturesProduct from "../components/FeaturesProduct/FeaturesProduct";
const Home = ({ cartProducts }) => {
  // this funciton is for take a dicision for open or close the cart

  return (
    <React.Fragment>
      <AlertBanner />
      <Header cartProducts={cartProducts}  />
      <Main>
        <Slider />
        <FeaturesProduct />
      </Main>
    </React.Fragment>
  );
};

export default Home;
