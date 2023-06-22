const Banner = ({ title, background }) => {
  return (
    <div className="banner">
      <div className="banner_background" style={{ backgroundImage: `url(${background})` }}></div>
      <div className="banner_content">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
