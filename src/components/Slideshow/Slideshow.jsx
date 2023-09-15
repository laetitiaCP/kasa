import {useState} from "react";
import "./Slideshow.scss";
import arrowLeft from "../../images/ArrowLeft.svg";
import arrowRight from "../../images/ArrowRight.svg";


function Slideshow({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="slide">
            {slides.length > 1 &&
                <img className="slide__leftArrow" src={arrowLeft} onClick={goToPrevious} alt="précédent"/>
            }
            {slides.length > 1 &&
                <img className="slide__rightArrow" src={arrowRight} onClick={goToNext} alt="suivant"/>
            }
            {slides.map((slide, index) => {
                return (
                    <div key={index} className="slider" >
                        {index === currentIndex &&  <img src={slide} alt="vues appartement" /> }
                        {index === currentIndex &&
                            <span className="slider__number">
                                { (currentIndex + 1) + "/" + slides.length }
                            </span>}
                    </div>
                )
            })}
        </div>
    )
}

export default Slideshow;