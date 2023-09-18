import Header from "../../components/Header/header";
import Banner from "../../components/Banner/banner";
import image from "../../images/ImgApropos.png";
import Collapsible from "../../components/Collapsible/collapsible";
import dataApropos from "../../data/dataApropos.json";
import "./Apropos.scss";
import Footer from "../../components/Footer/footer";

function APropos() {
    document.title="Kasa_A propos";
    return (
        <div>
            <Header />
            <Banner class={"aPropos-image"} source={image}/>
            <div className="collapses-wrap">
                { dataApropos.map( (data) => (
                    <Collapsible class="collapses-wrap__collapse" key={data.id} title={data.title} description={data.description}/>
                ))}

            </div>
            <Footer />
        </div>
    )
}

export default APropos;