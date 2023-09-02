import Header from "../../components/Header/header";
import Banner from "../../components/Banner/banner";
import image from "../../images/ImgApropos.png";
import Collapsible from "../../components/Collapsible/collapsible";
import dataApropos from "../../data/dataApropos.json";

function APropos() {
    console.log(dataApropos)
    return (
        <div>
            <Header />
            <Banner source={image}/>
            <div>
                { dataApropos.map( (data) => (
                    <Collapsible key={data.id} title={data.title} description={data.description}/>
                ))}

            </div>
        </div>

    )
}

export default APropos;