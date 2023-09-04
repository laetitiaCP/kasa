import logo from "../../images/logoBlack.png";
function Footer() {
    return (
        <div className="footer">
            <img className="footer__img" src={logo}/>
            <div className="footer__txt">© 2020 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer;