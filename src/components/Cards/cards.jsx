import "./cards.scss";
function Cards(props) {
    return (
        <div className="card">
            <img className="card__cover" src={props.cover} alt="cover"/>
            <h2 className="card__title">{props.title}</h2>
        </div>
    )
}

export default Cards;