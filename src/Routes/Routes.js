import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Views/HomePage";
import ShopPage from "../Views/ShopPage";

const PageRoutes = () => {
  const [cartState, setCartState] = useState([]);
  // this array sholud be array of objects contains information about the coming product

  const handleAddProductToCart = (newProduct, quantity) => {
    if (!cartState.find((item) => item === newProduct)) {
      // check if the product is already in the cart
      setCartState([...cartState, {...newProduct, quantity}]);
      console.log(quantity)
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <HomePage
              cartProducts={cartState}
              onAddToCart={handleAddProductToCart}
            />
          }
        />
        <Route
          element={
            <ShopPage
              cartProducts={cartState}
              onAddToCart={handleAddProductToCart}
            />
          }
          path="/shop"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
