import {useState} from "react";
import "./collapsible.scss";
import chevronHaut from "../../images/chevron.svg";
import chevronBas from "../../images/chevronBas.svg";

function Collapsible(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    function descriptionFormatting() {
        if (Array.isArray(props.description) === false) {
            return props.description;
        } else {
            return (
                <ul>
                    { (props.description).map( equipment => {
                        return <li key={equipment}>{equipment}</li>
                    })}
                </ul>
            )
        }
    }

    return (
        <div className={props.class}>
            <button className="collapse__button" onClick={toggle}>
                {props.title}
                { isOpen
                    ? <img className="collapse__chevronHaut" src={chevronHaut} alt="chevron haut" />
                    : <img className="collapse__chevronBas" src={chevronBas} alt="chevron bas" />
                }
            </button>
            {isOpen && (
                <div className="collapse__description">{descriptionFormatting()}</div>
            )}
        </div>
    )
}
export default Collapsible;