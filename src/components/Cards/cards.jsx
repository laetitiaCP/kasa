import "./cards.scss";
function Cards(props) {
    return (
        <div className="card">
            <a className="card__wrap" href={props.link}>
                <img className="card__cover" src={props.cover} alt="cover"/>
                <h2 className="card__title">{props.title}</h2>
            </a>
        </div>
    )
}

export default Cards;