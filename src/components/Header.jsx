import{Link} from "react-router-dom";
import "./../css/Header.css";
import logo from "../images/logo1.jpg";

const Header = () => {
    return(
        <div id = "header">
            <img id ="logo" src={logo} alt="Foreign Collective Logo" />
            <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/merch">Merch</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            <li><Link to = "/volunteer">Volunteer</Link></li>
            <li><Link to = "/scholarship">Scholarship</Link></li>
        </ul>
        </div>
    );
};

export default Header;