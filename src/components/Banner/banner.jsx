import "./banner.scss";
function Banner(props) {
    return (
        <div className="banner">
            <img className={props.class} src={props.source} alt="banner"/>
            <h1 className="banner__title">{props.title}</h1>
        </div>
    )
}

export default Banner;