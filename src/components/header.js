import React from "react";
import Navigation from "./navigation";
import logo from "../assets/logos/logo.svg";

const Header = () => {
  return (
    <header className="kasa_header">
      <img src={logo} alt="Logo Kasa" />
      <Navigation />
    </header>
  );
};

export default Header;



