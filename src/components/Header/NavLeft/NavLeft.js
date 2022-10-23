import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import styles from "./NavLeft.module.css";

const NavLeft = ({ isNavOpen, onOpenNav }) => {
  const navContent = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];

  return (
    <nav className={`${styles.nav} ${isNavOpen ? styles["nav-mobile"] : ""}`}>
      <img src="./images/logo.jpg" className={styles.logo}/>
      <ul>
        {navContent.map((c) => {
          return (
            <li key={c}>
              <a href="#">{c} <span><KeyboardArrowDownOutlinedIcon /></span></a>
            </li>
          );
        })}
      </ul>

      {isNavOpen && (
        <button onClick={onOpenNav}>
          <CloseIcon sx={{ fontSize: 40 }} />
        </button>
      )}
    </nav>
  );
};

export default NavLeft;
