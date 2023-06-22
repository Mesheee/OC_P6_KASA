import React from "react";
import logoFooter from "../assets/logos/logowhite.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-img" src={logoFooter} alt="logo Kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;