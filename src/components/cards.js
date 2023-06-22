import { Link } from "react-router-dom"; // Importation du composant Link de react-router-dom
import dataList from "../data/data.json";

const Card = () => {
  return (
    <div className="card_container"> {/* Conteneur principal des cartes */}
      <div className="cards"> {/* Div pour les cartes */}
        {dataList.map((location) => ( // Boucle sur les données de dataList
          <Link to={`/accomodations/${location.id}`} key={location.id}> {/* Lien vers l'URL spécifique à chaque emplacement */}
            <li className="card"> {/* Élément de liste représentant une carte */}
              <img
                className="card__img" 
                src={location.cover} 
                alt={`${location.title} de ${location.host.name}`} 
              />
              <h2 className="card__title">{location.title}</h2>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card; 
