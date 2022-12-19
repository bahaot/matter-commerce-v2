import React, { useState } from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import Container from "../../UI/Container/Container";

import Cart from "../Cart/Cart";
import NavLeft from "./NavLeft/NavLeft";
import NavRight from "./NavRight/NavRight";
import SearchBar from "./NavLeft/SearchBar/SearchBar";

import styles from "./Header.module.css";

const Header = ({ cartProducts, onAddToCart, onDeleteProduct }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = (e, boolean) => {
    setIsCartOpen(boolean);
  };

  const handleNavOpen = (e) => {
    e.preventDefault();
    if (!e.target) return;

    setNavOpen(!navOpen);
  };
  
  return (
    <header>
      <Container className={styles["container-nav"]}>
        <button onClick={handleNavOpen} className={styles["btn-nav__open"]}>
          <MenuOutlinedIcon sx={{ fontSize: 30, borderWidth: 1 }} />
        </button>
        <NavLeft isNavOpen={navOpen} onOpenNav={handleNavOpen} />

        <NavRight handleOpenCart={handleOpenCart} />
      </Container>

      <SearchBar />

      <Cart
        isCartOpen={isCartOpen}
        onOpenCart={handleOpenCart}
        products={cartProducts}
        onDeleteProduct={onDeleteProduct}
      />
    </header>
  );
};

export default Header;
