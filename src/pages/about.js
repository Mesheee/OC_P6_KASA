import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import Collapse from "../components/collapse";
import bannerImageAbout from "../assets/images/banner_kasa_2.png";
import "../styles/components/transition.scss";

const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mise à jour du titre de la page
    document.title = "Kasa - À propos";

    // Activation du composant (délai d'apparition avec la transition)
    setIsMounted(true);
  }, []);

  return (
    <div className={`fade-enter ${isMounted ? "fade-enter-active" : ""}`}>
      {/* Composant de bannière avec une image de fond */}
      <Banner background={bannerImageAbout} />
      <div className="about-container">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
};

export default About;
