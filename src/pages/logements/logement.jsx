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
    
    let ad = [];

    AdsList.map( (locAd) => {
        if (locAd.id === idLogement.id) {
            ad = locAd;
        }
        return ad;
    })

    let nameHost ="";
    let description;
    let location;
    let ville;
    let textLocation;
    console.log(ad)

    if (ad.id) {
        nameHost = (ad.host.name).split(" ")[0] + "\n" + (ad.host.name).split(" ")[1];

        description = (
            <ul>
                { ad.equipments.map ( (equipment, index) => {
                    return <li key={index}>{equipment}</li>
                }) }
            </ul>
        );

        location = (ad.location).split("-");
        ville = ((location[1]).split(" "))[1];
        textLocation = location[0] + ", " + ville;

        return (
            <div>
                <Header />
                <Slideshow slides={ad.pictures}/>
                <div className="ad">
                    <div className="ad__informations">
                        <h1 className="ad__informations__title">{ad.title}</h1>
                        <h2 className="ad__informations__location">{textLocation}</h2>
                        {ad.tags.map( (tag, index) => {
                            return <button className="ad__informations__tag" key={index} >{(tag.split(" ")[0])}</button>
                        })}
                    </div>
                    <div className="ad__rate">
                        <div className="ad__rate__host">
                            <h3>{nameHost}</h3>
                            <img src={ad.host.picture} alt="hôte"/>
                        </div>
                        <Rating nbStars = {ad.rating} />
                    </div>
                </div>
                <div className="collapses">
                    <Collapsible class="collapses__adCollapse" title = "Description" description = {ad.description} />
                    <Collapsible class="collapses__adCollapse" title = "Equipements" description= {description} />
                </div>
                <Footer />
            </div>
        )
    } else {
        return <Erreur404 />
    }
}

export default Logement;