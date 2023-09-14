import Header from "../../components/Header/header";
import AdsList from "../../data/dataAnnonces.json";
import Collapsible from "../../components/Collapsible/collapsible";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./logement.scss";


function Logement() {
    document.title = "Kasa_Annonce";

    const id = ((document.location.pathname).split("/"))[2];
    let ad = [];

    AdsList.map( (locAd) => {
        if (locAd.id === id) {
            ad = locAd;
        }
        return ad;
    })
    console.log(ad)
    const nameHost = (ad.host.name).split(" ")[0] + "\n" + (ad.host.name).split(" ")[1];

    return (
        <div>
            <Header />
            <Slideshow slides={ad.pictures}/>
            <div className="ad">
                <div className="ad__informations">
                    <h1 className="ad__informations__title">{ad.title}</h1>
                    <h2 className="ad__informations__location">{ad.location}</h2>
                    {ad.tags.map( (tag, index) => {
                        return <button className="ad__informations__tag" key={index} >{tag}</button>
                    })}
                </div>
                <div className="ad__rate">
                    <div className="ad__rate__host">
                        <h3>{nameHost}</h3>
                        <img src={ad.host.picture} alt="hôte"/>
                    </div>
                    <div className="ad-rate__rating">

                    </div>
                </div>
            </div>
            <div className="collapses">
                <Collapsible title = "Description" description = {ad.description} />
                <Collapsible title = "Equipements" description = {ad.equipments.map( equipment => {
                    return (
                        <ul>
                            <li>{equipment}</li>
                        </ul>
                    )
                })}
                />
            </div>
        </div>
    )
}

export default Logement;