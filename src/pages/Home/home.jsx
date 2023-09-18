import Header from "../../components/Header/header";
import "./home.scss";
import Banner from "../../components/Banner/banner";
import image from "../../images/ImgHome.png";
import Cards from "../../components/Cards/cards";
import listAnnonces from "../../data/dataAnnonces.json";
import Footer from "../../components/Footer/footer";
function Home() {
    document.title="Kasa_Accueil";
    const locText = `Chez vous, ${"\n"} partout et ailleurs`;
    return (
        <div>
            <Header />
            <Banner class={"banner__img"} source={image} title={locText} />
            <div className="cards">
                {listAnnonces.map ( (annonce) => (
                    <Cards key={annonce.id} title={annonce.title} cover={annonce.cover} link={`/logement/${annonce.id}`}/>
                )) }

            </div>
            <Footer />
        </div>
    )
}

export default Home