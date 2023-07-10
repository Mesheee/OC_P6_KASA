import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import Cards from "../components/cards";
import bannerImageHome from "../assets/images/banner_kasa.png";
import "../styles/components/transition.scss";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Modification du titre de l'onglet
    document.title = "Kasa - Accueil";
    setIsMounted(true);
  }, []);

  return (
    <div className={`fade-enter ${isMounted ? "fade-enter-active" : ""}`}>
      {/* Composant de la bannière */}
      <Banner
        title={
          <>
            Chez vous,<span className="line-break"></span> partout et ailleurs
          </>
        }
        background={bannerImageHome}
      />
      {/* Composant des cartes */}
      <Cards />
    </div>
  );
};

export default Home;
