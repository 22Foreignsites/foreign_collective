import{Link} from "react-router-dom";
import "./../css/Gallery.css";
import housePic from "../images/house.jpg";

const Merch = (clothes) => {
    return(
    <section className = "gallery-items">
        <h1>{clothes.name}</h1>
        <img src={housePic} alt="gallery"/>
        <p>Price: {clothes.price}</p>
    </section>
    );
};

export default Merch;
