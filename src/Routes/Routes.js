import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Views/HomePage";
import ShopPage from "../Views/ShopPage";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<ShopPage />} path="/shop" />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
