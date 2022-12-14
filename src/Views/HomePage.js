import React, { useContext } from "react";
import AlertBanner from "../sharedComponents/AlertBanner/AlerBanner";
import Header from "../sharedComponents/Header/Header";
import Main from "../UI/Main";
import Slider from "../components/Slider/Slider";
import About from "../components/About/About";
import Explore from "../components/Explore/Expolore";
import Shop from "../components/Shop/Shop";
import Videos from "../components/Videos/Videos";
import AsSeenOn from "../components/AsSeenOn/AsSeenOn";
import Footer from "../components/Footer/Footer";
import FeaturesProduct from "../components/FeaturesProduct/FeaturesProduct";
import LoginContext from "../context/login-context";

const Home = ({ cartProducts, onAddToCart }) => {
  // this funciton is for take a dicision for open or close the cart

  const loginStatus = useContext(LoginContext);
  return (
    <React.Fragment>
      <AlertBanner />
      <Header cartProducts={cartProducts} />
      <Main>
        <Slider />

        <FeaturesProduct onAddToCart={onAddToCart} />
        <About />
        <Explore />
        <Shop />
        <Videos />
        <AsSeenOn />
        <Footer />
      </Main>
    </React.Fragment>
  );
};

export default Home;
