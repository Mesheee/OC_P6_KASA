import Navigation from "./navigation";
import logo from "../assets/logos/logo.svg";

const Header = () => {
  return (
    <header className="kasa_header">
      {/* Logo Kasa */}
      <img src={logo} alt="Logo Kasa" />
      {/* Composant de navigation */}
      <Navigation />
    </header>
  );
};

export default Header;
