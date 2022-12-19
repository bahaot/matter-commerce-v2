import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContext from "../context/login-context";
import Auth from "../Views/Auth";
import HomePage from "../Views/HomePage";
import ShopPage from "../Views/ShopPage";

const PageRoutes = () => {
  const [cartState, setCartState] = useState([]);
  // this array sholud be array of objects contains information about the coming product

  const handleAddProductToCart = (newProduct, quantity) => {
    if (!cartState.find((item) => item === newProduct)) {
      // check if the product is already in the cart
      setCartState([...cartState, { ...newProduct, quantity }]);
    }
  };
  const handleDeleteProductFromCart = (productId) => {
    const filteredProducts = cartState.filter((p) => p.id !== productId);

    setCartState(filteredProducts);
  };

  return (
    <LoginContext.Provider value="test">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <HomePage
                cartProducts={cartState}
                onAddToCart={handleAddProductToCart}
                onDeleteProduct = {handleDeleteProductFromCart}

              />
            }
          />
          <Route
            element={
              <ShopPage
                cartProducts={cartState}
                onAddToCart={handleAddProductToCart}
                onDeleteProduct={handleDeleteProductFromCart}
              />
            }
            path="/shop"
          />
          <Route element={<Auth />} path="/auth/login" />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
};

export default PageRoutes;
