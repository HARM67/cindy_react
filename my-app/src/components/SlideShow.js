import { useState } from "react";
import lodging from "../data/logements.json";
import { useParams } from "react-router-dom";
import LeftArrow from "../assets/FlecheGauche.svg";
import RightArrow from "../assets/FlecheDroite.svg";
import "../style/SlideShow.css";

function SlideShow(props) {

  const { children } = lodging;
  const [sliderPosition, setSliderPosition] = useState(0);

  const paramsId = useParams();
  //   console.log(paramsId);
  const selectedLogement = lodging.find(
    (Logement) => Logement.id === paramsId.id
  );

  const pictures = selectedLogement.pictures;
  const titleLogement = selectedLogement.title;

  //   let isOne = false;
  //   if (length === 1) {
  //     isOne = true;

  const prev = () => {
    let newPosition = sliderPosition;
    if (newPosition > 0) {
      newPosition = newPosition - 1;
    }
    setSliderPosition(newPosition);
  };

  const next = () => {
    let newPosition = sliderPosition;
    if (newPosition < children.length - 1) {
      newPosition = newPosition + 1;
    }
    setSliderPosition(newPosition);
  };
  return (
    <section className="CarouselLogement">
      <img
        className="LeftArrow"
        src={LeftArrow}
        alt="flèche gauche"
        onClick={prev}
      />
      <img
        className="RightArrow"
        src={RightArrow}
        alt="flèche droite"
        onClick={next}
      />
      <article className="CarouselImg">
        {pictures.map((picture, index) => (
          <img
            key={`CarouselPicutre${index}`}
            src={picture}
            alt={`logement ${titleLogement}`}
            className="logementImg"
          />
        ))}
      </article>
    </section>
  );
}

export default SlideShow;
