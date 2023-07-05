import React, { useState } from "react";
import chevronUp from "../assets/icons/chevron-up.png";
import chevronDown from "../assets/icons/chevron-down.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="collapse-container">
      <div className="collapse">
        <div onClick={() => setIsOpen(false)} className="collapse-header">
          <h2 className="collapse-title">{title}</h2>
          <img
            className="collapse-chevron"
            src={isOpen ? chevronUp : chevronDown}
            alt="Chevron"
          />
        </div>
      </div>
      <div className="collapse-content">{content}</div>
    </div>
  ) : (
    <div className="collapse-container">
      <div className="collapse">
        <div className="collapse-header" onClick={() => setIsOpen(true)}>
          <h2 className="collapse-title">{title}</h2>
          <img
            className="collapse-chevron"
            src={isOpen ? chevronUp : chevronDown}
            alt="Chevron"
          />
        </div>
      </div>
    </div>
  );
};

export default Collapse;