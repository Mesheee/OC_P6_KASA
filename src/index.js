import React from "react"; // Importation de la bibliothèque React
import ReactDOM from "react-dom/client"; // Importation de la bibliothèque ReactDOM
import App from "./App"; // Importation du composant principal de l'application
import "./styles/main.scss"; // Importation du fichier de style principal

const root = ReactDOM.createRoot(document.getElementById("root")); // Création de la racine de rendu pour l'application React

root.render(
  <React.StrictMode> {/* Mode strict de React pour effectuer des vérifications supplémentaires */}
    <App/> {/* Rendu du composant App */}
  </React.StrictMode>
);
