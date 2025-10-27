import{Link} from "react-router-dom";
import "./../css/Navigation.css";

const Navigation = () => {
    return(
    <nav id ="main-nav">
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/merch">Merch</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            <li><Link to ="/volunteer">Volunteer</Link></li>
            <li><Link to ="/scholarship">Scholarship</Link></li>
        </ul>

    </nav>
    );
};

export default Navigation;