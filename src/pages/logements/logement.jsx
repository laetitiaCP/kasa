import Header from "../../components/Header/header";
import AdsList from "../../data/dataAnnonces.json";
import Collapsible from "../../components/Collapsible/collapsible";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./logement.scss";
import Rating from "../../components/Rating/rating";
import {useParams} from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Erreur404 from "../Erreur404/erreur404";


function Logement() {
    document.title = "Kasa_Annonce";

    const idLogement = useParams('id');
    
    const ad = AdsList.find(locAd => locAd.id === idLogement.id);

    function textLocationFormatting() {
        let locRegion = (ad.location).split("-");
        let locCity = ((locRegion[1]).split(" "))[1];
        return locRegion[0] + ", " + locCity;
    }

    function nameHostFormatting() {
        return (ad.host.name).split(" ")[0] + "\n" + (ad.host.name).split(" ")[1];
    }

    if (!ad.id) {
        return <Erreur404/>
    } else {
        return (
            <div>
                <Header />
                <Slideshow slides={ad.pictures}/>
                <div className="ad">
                    <div className="ad__informations">
                        <h1 className="ad__informations__title">{ad.title}</h1>
                        <h2 className="ad__informations__location">{textLocationFormatting()}</h2>
                        {ad.tags.map( (tag, index) => {
                            return <button className="ad__informations__tag" key={index} >{(tag.split(" ")[0])}</button>
                        })}
                    </div>
                    <div className="ad__rate">
                        <div className="ad__rate__host">
                            <h3>{nameHostFormatting()}</h3>
                            <img src={ad.host.picture} alt="hôte"/>
                        </div>
                        <Rating nbStars = {ad.rating} />
                    </div>
                </div>
                <div className="collapses">
                    <Collapsible class="collapses__adCollapse" title = "Description" description = {ad.description} />
                    <Collapsible class="collapses__adCollapse" title = "Equipements" description= {ad.equipments} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Logement;