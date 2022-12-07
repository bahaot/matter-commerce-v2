import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Views/HomePage";
import ShopPage from "../Views/ShopPage";

const PageRoutes = () => {
  const [cartState, setCartState] = useState([]);

  const handleAddProductToCart = (newProduct) => {
    console.log(newProduct);
    setCartState([...cartState, newProduct]);
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
