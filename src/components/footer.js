import logoFooter from "../assets/logos/logowhite.svg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo Kasa */}
      <img className="footer_img" src={logoFooter} alt="Logo Kasa" />
      {/* Texte du footer */}
      <p className="footer_text">© 2020 Kasa.<span className="line_break"></span> All rights reserved</p>
    </footer>
  );
};

export default Footer;


