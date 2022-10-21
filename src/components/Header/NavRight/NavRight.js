import React from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import styles from "./NavRight.module.css";

const NavRight = () => {
  const navContent = [
    <FavoriteBorderOutlinedIcon sx={{ fontSize: 25 }} />,
    <ShoppingBagOutlinedIcon sx={{ fontSize: 25 }} />,
  ];
  return (
    <ul>
      <li className={styles.hidden}>LOGIN</li>
      {navContent.map((c) => {
        return <li>{c}</li>;
      })}
    </ul>
  );
};

export default NavRight;
