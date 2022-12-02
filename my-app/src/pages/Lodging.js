import UseTitle from "../index";
import lodging from "../data/logements.json";
import { useParams } from "react-router-dom";
import SlideShow from "../components/SlideShow";
import "../style/Lodging.css";

function Lodging() {
  // console.log(lodging);
  const paramsId = useParams();
  // console.log(paramsId);
  const selectedLogement = lodging.find(
    (Logement) => Logement.id === paramsId.id
  );

  UseTitle(`${selectedLogement.title}`);

  return <SlideShow />;
}

export default Lodging;
