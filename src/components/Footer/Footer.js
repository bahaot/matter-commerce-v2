import React from "react";

import Container from "../../UI/Container/Container";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Container className={styles["footer-container"]}>
        <div className={`${styles["col"]} ${styles["col-1"]}`}>
          <p className={styles["title-col"]}>Categories</p>
          <ul className={styles["footer-lists"]}>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Contace</li>
            <li>Journal</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={`${styles["col"]} ${styles["col-2"]}`}>
          <p className={styles["title-col"]}>Partners </p>
          <ul className={styles["footer-lists"]}>
            <li>Support</li>
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
            <li> Product Care</li>
          </ul>
        </div>
        <div className={`${styles["col"]} ${styles["col-3"]}`}>
          <p className={styles["title-col"]}>Contact us</p>
          <ul className={styles["footer-lists"]}>
            <li>26A Pagoda St, TANGS,</li>
            <li> Singapore, 058187</li>
            <li>
              <a href="tel:+65 6221 5462">+65 6221 5462</a>{" "}
            </li>
          </ul>
        </div>

        <div className={styles["col-4"]}>
          <p className={styles["title-col"]}>Subscribe to newsletter</p>
          <div className={styles["footer-email__box"]}>
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className={styles["input-footer"]}
            />
            <button className={styles["footer-email__btn"]}>SUBSCRIBE</button>
          </div>
          <ul className={styles["social-links"]}>
            <li>
              <img
                src="./imgs/logos/facebook.png"
                className={styles["icon-social"]}
              />
            </li>
            <li>
              <img
                src="./imgs/logos/twitter.png"
                className={styles["icon-social"]}
              />
            </li>
          </ul>
        </div>
      </Container>
      <p className={styles["copyright"]}>© Copyright Matter PTE LTD 2017</p>
    </footer>
  );
};

export default Footer;
