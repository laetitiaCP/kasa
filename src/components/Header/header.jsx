import logo from "../../images/LOGO.svg";
import "./header.scss";
import {Link, useLocation} from "react-router-dom";
function Header() {
    const location = useLocation();

    return (
        <div className="header">
            <img id="logo" src={logo} alt="logo Kasa"/>
            <nav className="header__nav">
                <Link to="/" className= {
                    location.pathname === "/" ? "header__link active" : "header__link"
                }
                >Accueil</Link>
                <Link to="/apropos" className= {
                    location.pathname === "/apropos" ? "header__link active" : "header__link"
                }
                >A Propos</Link>
            </nav>
        </div>
    )
}

export default Header;