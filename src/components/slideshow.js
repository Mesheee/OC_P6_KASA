import React, { useState } from "react";
import chevronLeft from "../assets/icons/chevron-left.png";
import chevronRight from "../assets/icons/chevron-right.png";

const SlideShow = ({ images }) => {
  const [counter, setCounter] = useState(0);
  const slideLength = images.length;
  const actualImage = images[counter];

  const slideLeft = () => {
    // Décrémente le compteur en utilisant l'opération modulo pour gérer le défilement 
    setCounter((counter + slideLength - 1) % slideLength);
  };

  const slideRight = () => {
    // Incrémente le compteur en utilisant l'opération modulo pour gérer le défilement 
    setCounter((counter + 1) % slideLength);
  };

  return (
    <div className="slider-container">
      <img
        className="banner-img"
        src={actualImage}
        alt="Intérieur appartement"
      />
      {/* Affiche les flèches de navigation uniquement si le nombre d'images est supérieur à 1 */}
      {slideLength > 1 && (
        <div className="sup-container">
          {/* Déclenche la fonction slideLeft lors du clic sur la flèche gauche */}
          <img
            onClick={slideLeft}
            className="arrow arrow-left"
            src={chevronLeft}
            alt="arrow left"
          />
          <p className="banner-number">
            {counter + 1}/{slideLength}
          </p>
          {/* Déclenche la fonction slideRight lors du clic sur la flèche droite */}
          <img
            onClick={slideRight}
            className="arrow arrow-right"
            src={chevronRight}
            alt="arrow right"
          />
        </div>
      )}
    </div>
  );
};

export default SlideShow;
