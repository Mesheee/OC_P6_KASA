const Banner = ({ title, background }) => {
  return (
    <div className="banner">
      {/* Conteneur de l'image de fond */}
      <div className="banner_background" style={{ backgroundImage: `url(${background})` }}></div>
      {/* Contenu du banner */}
      <div className="banner_content">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
