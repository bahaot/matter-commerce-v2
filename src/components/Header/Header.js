import React, { useState } from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import Container from "../../UI/Container/Container";
import NavLeft from "./NavLeft/NavLeft";

import styles from "./Header.module.css";
import NavRight from "./NavRight/NavRight";
import SearchBar from "./NavLeft/SearchBar/SearchBar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
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

        <NavRight />
      </Container>

      <SearchBar />
    </header>
  );
};

export default Header;
