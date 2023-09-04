import Header from "../../components/Header/header";
import {Link} from "react-router-dom";
import "./erreur404.scss";

function Erreur404() {
    const locText = `Oups! La page que ${"\n"} vous demandez n'existe pas.`;
    return (
        <div>
            <Header />
            <div className="erreur">
                <div className="erreur__num">404</div>
                <div className="erreur__msg">{locText}</div>
                <Link className="erreur__link" to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default Erreur404;