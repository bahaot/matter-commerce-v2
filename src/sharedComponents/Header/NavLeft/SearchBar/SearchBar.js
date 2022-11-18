import React, { useState } from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Container from "../../../../UI/Container/Container";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [isFoucs, setIsFocus] = useState(false);

  const handleFocus = (e) => {
    if (!e.target.value) {
      setIsFocus(false);

      return;
    }

    setIsFocus(true);
  };
  return (
    <Container className={styles["container-search"]}>
      <label for="input-search" className={isFoucs ? styles.hidden : ""}>
        <SearchOutlinedIcon fontSize="large" />
      </label>
      <input
        type="text"
        id="input-search"
        className={styles["input-nav__serach"]}
        onChange={handleFocus}
      />
    </Container>
  );
};

export default SearchBar;
