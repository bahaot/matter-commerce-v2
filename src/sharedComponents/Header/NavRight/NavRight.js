import React from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./NavRight.module.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../utilis/firebase";

const NavRight = ({ handleOpenCart }) => {
  const [user, loading] = useAuthState(auth);
  return (
    <ul className={styles["list-right"]}>
      <li className={styles.hidden}>
        {user ? <p>{user.displayName}</p> : <Link to="/auth/login">Login</Link>}
      </li>

      <li className={styles.hidden}>
        <SearchIcon sx={{ fontSize: 25 }} />
      </li>

      <li>
        <button className={styles["btn-nav__right"]}>
          <FavoriteBorderOutlinedIcon sx={{ fontSize: 25 }} />
        </button>
      </li>

      <li>
        <button
          onClick={(e) => handleOpenCart(e, true)}
          className={styles["btn-nav__right"]}
        >
          <ShoppingBagOutlinedIcon sx={{ fontSize: 25 }} />
        </button>
      </li>
    </ul>
  );
};

export default NavRight;
