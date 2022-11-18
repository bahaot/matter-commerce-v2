import React from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./NavRight.module.css";

const NavRight = ({isNavOpen}) => {
  const navContent = [
    <FavoriteBorderOutlinedIcon sx={{ fontSize: 25 }} />,
    <ShoppingBagOutlinedIcon sx={{ fontSize: 25 }} />,
  ];
  return (
    <ul className={styles['list-right']}>
      <li className={styles.hidden}>
        <a>LOGIN</a>
      </li>
      <li className={styles.hidden}>
        <SearchIcon sx={{ fontSize: 25 }} />
      </li>
      {navContent.map((c) => {
        return (
          <li>
            <a href="#c"> {c} </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavRight;
