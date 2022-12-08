import React from "react";

import Container from "../../UI/Container/Container";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container className="footer-container">
        <div className="col col-1">
          <p className="title-col">Categories</p>
          <ul className="footer-lists">
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Contace</li>
            <li>Journal</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="col col-2">
          <p className="title-col">Partners </p>
          <ul className="footer-lists">
            <li>Support</li>
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
            <li> Product Care</li>
          </ul>
        </div>
        <div className="col col-3">
          <p className="title-col">Contact us</p>
          <ul className="footer-lists">
            <li>26A Pagoda St, TANGS,</li>
            <li> Singapore, 058187</li>
            <li>
              <a href="tel:+65 6221 5462">+65 6221 5462</a>{" "}
            </li>
          </ul>
        </div>

        <div className="col-4">
          <p className="title-col">Subscribe to newsletter</p>
          <div className="footer-email__box">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="input-footer"
            />
            <button className="footer-email__btn">SUBSCRIBE</button>
          </div>
          <ul className="social-links">
            <li>
              <img src="./imgs/logos/facebook.png" className="icon-social" />
            </li>
            <li>
              <img src="./imgs/logos/twitter.png" className="icon-social" />
            </li>
          </ul>
        </div>
      </Container>
      <p className="copyright">© Copyright Matter PTE LTD 2017</p>
    </footer>
  );
};

export default Footer;
