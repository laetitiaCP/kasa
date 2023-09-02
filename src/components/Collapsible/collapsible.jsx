import {useState} from "react";

function Collapsible(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="button" onClick={toggle}>{props.title}</button>
            {isOpen && (
                <div className="description">{props.description}</div>
            )}
        </div>
    )
}
export default Collapsible;