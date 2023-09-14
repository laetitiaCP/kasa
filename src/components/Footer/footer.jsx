import logo from "../../images/logoBlack.png";
import "./footer.scss";
function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <img className="footer__content__img" src={logo} alt="logo noir et blanc"/>
                <div className="footer__content__txt">© 2020 Kasa. All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer;