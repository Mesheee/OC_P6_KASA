import Banner from "../components/banner";
import Cards from "../components/cards"; 
import bannerImageHome from "../assets/images/banner_kasa.png";

const Home = () => {
  document.title = "Kasa - Accueil";

  return (
    <div>
     <Banner
  title={
    <>
      Chez vous,<span className="line-break"></span> partout et ailleurs
    </>
  }
  background={bannerImageHome}
/>

      <Cards/>
    </div>
  );
};

export default Home; 