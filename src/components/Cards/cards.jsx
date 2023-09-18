import "./cards.scss";
import {Link} from "react-router-dom";
function Cards(props) {
    return (
        <div className="card">
            <Link className="card__wrap" to={props.link} >
                <img className="card__cover" src={props.cover} alt="cover"/>
                <h2 className="card__title">{props.title}</h2>
            </Link>
        </div>
    )
}

export default Cards;