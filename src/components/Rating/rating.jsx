
import "./rating.scss";
import Star from "./star";
function Rating(nbStars) {

    const rate = parseInt(nbStars.nbStars);
    const nbMaxStars = 5;
    const emptyStars = nbMaxStars - rate;

    return (
        <div className="rating">
            { [...Array(rate)].map( (e,index) => {
                 return <Star key={index} class="colored-star" />
            })}
            { [...Array(emptyStars)].map( (e,index) => {
                return <Star key={index} class="empty-star" />
            })}
        </div>
    )
}

export default Rating;