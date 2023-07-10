import React, { useState } from "react";
import chevronUp from "../assets/icons/chevron-up.png";
import chevronDown from "../assets/icons/chevron-down.png";

// Composant pour le contenu pliable
const Collapse = ({ title, content }) => {
  // Utilisation de l'état local pour suivre l'état d'ouverture du collapsible
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <>
      <div className="collapse_container">
        <div className="collapse">
          <div
            onClick={() => setIsCollapseOpen(!isCollapseOpen)}
            className="collapse_header"
          >
            <h2 className="collapse_title">{title}</h2>
            {/* Affichage flèche vers le haut si collapsible ouvert, sinon affichage vers le bas */}
            <img
              className="collapse_chevron"
              src={isCollapseOpen ? chevronUp : chevronDown}
              alt="Chevron"
            />
          </div>
        </div>
        {/* Contenu du collapse (affiché uniquement si isCollapseOpen est vrai) */}
        {isCollapseOpen && <div className="collapse_content">{content}</div>}
      </div>
    </>
  );
};

export default Collapse;
