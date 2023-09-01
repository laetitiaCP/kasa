import Header from "../../components/Header/header";
import "./home.scss";
import Banner from "../../components/Banner/banner";
import image from "../../images/ImgHome.png";
import Cards from "../../components/Cards/cards";
import listAnnonces from "../../data/dataAnnonces.json";
function Home() {
    console.log(listAnnonces);

    return (
        <div>
            <Header />
            <Banner source={image} title="Chez vous, partout et ailleurs"/>
            <div>
                <Cards />
            </div>
        </div>
    )
}

export default Home