import{Link} from "react-router-dom";
import "./../css/Footer.css";

const Footer = () => { //You can add a double nav instead of adding a footer and and a header, just keep that in mind
    return(
        <div id = "footer">
            <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            <li><Link to = "/volunteer">Volunteer</Link></li>
            <li><Link to = "/scholarship">Scholarship</Link></li>
        </ul>
        </div>
    );  
};

export default Footer;