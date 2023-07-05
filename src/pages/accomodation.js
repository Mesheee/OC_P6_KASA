import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataList from "../data/data.json";
import SlideShow from "../components/slideshow";
import Collapse from "../components/collapse";
import star from "../assets/icons/filled-star.png";
import emptyStars from "../assets/icons/empty-star.png";

const Accomodation = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const selectedItem = dataList.find((item) => item.id === id);

  // Renvoi sur la page erreur si l'id est introuvable
  useEffect(() => {
    if (!selectedItem) {
      console.log("Aucun élément correspondant à l'ID trouvé.");
      navigate("*");
    }
  }, [selectedItem, navigate]);

  if (selectedItem) {
    const title = selectedItem.title;
    const pictures = selectedItem.pictures;
    const description = selectedItem.description;
    const host = selectedItem.host;
    const rating = selectedItem.rating;
    const location = selectedItem.location;
    const equipments = selectedItem.equipments;
    const tags = selectedItem.tags;
    const numberStars = parseInt(rating);
    const stars = [];

    // Génère les étoiles en fonction de rating et les stocke dans un array
    for (let i = 0; i < numberStars; i++) {
      stars.push(
        <img src={star} alt="note sur 5" key={i} className="star filled-star" />
      );
    }

    // Modication du titre de l'onglet
    document.title = "Kasa - " + title + " par " + host.name;

    return (
      <div>
        <div className="accomodation_container">
          <SlideShow images={pictures} />
          <div className="accomodation">
            <div className="accomodation_header">
              <h1 className="accomodation_title">{title}</h1>
              <h2 className="accomodation_location">{location}</h2>
            </div>

            <div className="accomodation_host">
              <p>{host.name}</p>
              <img src={host.picture} alt={"photo de profil de " + host.name} />
            </div>
          </div>
          <div className="accomodation_tags_stars">
            <ul className="tags">
              {tags.map((tag, index) => (
                <li className="accomodation_tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
            <div className="acc-stars-host">
              <div className="accomodation_stars">
                <div className=" filled_star_container ">{stars}</div>
                <div className=" empty-star-container">
                  <img
                    src={emptyStars}
                    alt="pas de note"
                    className="star empty-star"
                  />
                  <img
                    src={emptyStars}
                    alt="pas de note"
                    className="star empty-star"
                  />
                  <img
                    src={emptyStars}
                    alt="pas de note"
                    className="star empty-star"
                  />
                  <img
                    src={emptyStars}
                    alt="pas de note"
                    className="star empty-star"
                  />
                  <img
                    src={emptyStars}
                    alt="pas de note"
                    className="star empty-star"
                  />
                </div>
              </div>

            </div>
          </div>
          <div className="accomodation_collapse_container">
            <Collapse
              title="Description"
              content={description}
              className="accomodation_collaspe"
            />
            <Collapse
              title="Équipements"
              content={
                <ul className="accomodation-equipement">
                  {equipments.map((equipment, index) => (
                    <li key={index} className="equipement">
                      {equipment}
                    </li>
                  ))}
                </ul>
              }
              className="accomodation-collaspe"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Accomodation;

