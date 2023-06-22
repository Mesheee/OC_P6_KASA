import Banner from "../components/banner";
import Cards from "../components/cards"; 
import bannerImageHome from "../assets/images/banner_kasa.png";

const Home = () => {
  document.title = "Kasa - Accueil";

  return (
    <div>
      <Banner // Utilisation du composant Banner
        title="Chez vous, partout et ailleurs" // Propriété : titre du banner
        background={bannerImageHome} // Propriété : image de fond du banner
      />
      <Cards/>
    </div>
  );
};

export default Home; 