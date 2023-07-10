import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="kasa_nav">
      <ul>
        <li>
          {/* Lien de navigation vers la page d'accueil */}
          <NavLink to={"/"} className={(nav) => (nav.isActive ? "nav_active" : null)}>
            Accueil
          </NavLink>
        </li>
        <li>
          {/* Lien de navigation vers la page "À propos" */}
          <NavLink to={"/about"} className={(nav) => (nav.isActive ? "nav_active" : null)}>
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
