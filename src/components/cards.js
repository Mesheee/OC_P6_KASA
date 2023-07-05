import { Link } from "react-router-dom";
import dataList from "../data/data.json";

const Card = () => {
  return (
    <div className="card_container"> {/* Conteneur principal des cartes */}
      <div className="cards"> {/* Div pour les cartes */}
        {dataList.map(({ id, cover, title, host }) => ( // Boucle sur les données de dataList en utilisant la destructuration
          <Link to={`/accomodation/${id}`} key={id}> {/* Lien vers l'URL spécifique à chaque emplacement */}
            <li className="card"> {/* Élément de liste représentant une carte */}
              <img
                className="card__img" 
                src={cover} 
                alt={`${title} de ${host.name}`} 
              />
              <h2 className="card__title">{title}</h2>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
