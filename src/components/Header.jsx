import{Link} from "react-router-dom";
import "./../css/Header.css";
import logo from "../images/logo1.jpg";
import {useState} from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    return(
        // <div id = "header">
        //     <img id ="logo" src={logo} alt="Foreign Collective Logo" />
        //     <ul>
        //     <li><Link to ="/">Home</Link></li>
        //     <li><Link to ="/contact">Contact</Link></li>
        //     <li><Link to = "/volunteer">Volunteer</Link></li>
        //     <li><Link to = "/scholarship">Scholarship</Link></li>
        // </ul>
        // </div>
<header id="header">
            <img id="logo" src={logo} alt="Foreign Collective Logo" />

            <button
                className={`hamburger ${open ? 'is-active' : ''}`}
                aria-label="Toggle navigation"
                aria-expanded={open}
                onClick={() => setOpen(o => !o)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`nav ${open ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                    <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
                    <li><Link to="/volunteer" onClick={() => setOpen(false)}>Volunteer</Link></li>
                    <li><Link to="/scholarship" onClick={() => setOpen(false)}>Scholarship</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;