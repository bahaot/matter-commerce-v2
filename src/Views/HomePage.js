import React from "react";
import AlertBanner from "../sharedComponents/AlertBanner/AlerBanner";
import Header from "../sharedComponents/Header/Header";
import Main from "../UI/Main";
import Slider from "../components/Slider/Slider";

import FeaturesProduct from "../components/FeaturesProduct/FeaturesProduct";
const Home = () => {
  return (
    <React.Fragment>
      <AlertBanner />
      <Header />
      <Main>
        <Slider />
        <FeaturesProduct/>
      </Main>
    </React.Fragment>
  );
};

export default Home;
