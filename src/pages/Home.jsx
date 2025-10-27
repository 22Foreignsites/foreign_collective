import "./../css/Home.css";
import BigHeader from "../components/BigHeader";
import spartanImg from "../images/spartan.jpeg";
import BlankCards from "../components/BlankCards";
import Shirt from "../images/Shirt.avif";
import team from "../images/contact1.webp";
import volunteer from "../images/volunteer.jpeg";
import { href } from "react-router-dom";

const Home = () => {
    return(
        <> 
            <BigHeader image={spartanImg} position="center" title="Bringing People Together" subtitle="Remind the world that our differences connect us, shape us, and make us stronger together." />

        <div id = "introduction" className = "introduction-content">
            <h1>Foreign Collective</h1>
            <p>Uniting diverse voices for a brighter future.</p>
        </div>

        <div id = "list" className = "facts-list">
            <h2>What we're about</h2>
                <ul>
                    <li>We are a non-profit group that helps local communities.</li>
                    <li>We started by selling merch and sharing on social media.</li>
                    <li>Anyone can help by buying cool products or joining our team.</li>
                    <li>Every sale and every supporter helps us make real change.</li>
                    <li>We work together to help people and neighborhoods directly.</li>
                    <li>At The Foreign Collective, we honor the beauty of being foreign. Our mission is to remind the world that our differences connect us, shape us, and make us stronger together.</li>
                </ul>
        </div>

        <BlankCards images={[Shirt, team, volunteer]} labels={['Merch', 'Contact', 'Volunteer']} items={[{ href: '/merch', label: 'Merch' }, { href: '/contact', label: 'Contact' }, { href: '/volunteer', label: 'Volunteer' }]} />

        </>
    );
};

export default Home;
