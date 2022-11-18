import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Views/Home";
import Shop from "../Views/Shop";
const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route element={<Shop />} path="/shop"/>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
