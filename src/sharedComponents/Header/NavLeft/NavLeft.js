import React from "react";
import { Link } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import Logo from "../../../UI/Logo/Logo";

import styles from "./NavLeft.module.css";

const NavLeft = ({ isNavOpen, onOpenNav }) => {
  const navContent = [
    { title: "SHOP", path: "/shop" },
    { title: "FABRIC", path: "/fabric" },
    { title: "JOURNAL", path: "/journal" },
    { title: "ABOUT", path: "/about" },
  ];

  return (
    <nav className={`${styles.nav} ${isNavOpen ? styles["nav-mobile"] : ""}`}>
      <Link to="/">
      <Logo />
      </Link>
      <ul>
        {navContent.map((item) => {
          return (
            <li key={item.title}>
              <Link to={item.path}>
                {item.title}{" "}
                <span>
                  <KeyboardArrowDownOutlinedIcon />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {isNavOpen ? (
        <button onClick={onOpenNav}>
          <CloseIcon sx={{ fontSize: 40 }} />
        </button>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavLeft;
