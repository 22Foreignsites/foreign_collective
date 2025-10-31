import "./../css/Home.css";
import "./../css/Slideshow.css";
import BigHeader from "../components/BigHeader";
import spartanImg from "../images/spartan.jpeg";
import BlankCards from "../components/BlankCards";
import Flashcards from "../components/Flashcards";
import Shirt from "../images/Shirt.avif";
import team from "../images/contact1.webp";
import volunteer from "../images/volunteer.jpeg";
import world from "../ImgIcon/world.png";
import { href } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import HoneyBadger from "../images/HoneyBadger.webp";

const Home = () => {
    return(
        <> 
            {/* <BigHeader image={spartanImg} position="center" title="Bringing People Together" subtitle="Remind the world that our differences connect us, shape us, and make us stronger together." /> */}

            <Slideshow/>

        <div id="Making Difference" className="introduction-content">
            <div className="intro-inner">
                <div className="intro-icon" aria-hidden>
                    <img src={world} alt="world icon" />
                </div>
                <div className="intro-text">
                    <h2>Making a Difference</h2>
                    <p>At The Foreign Collective, were a nonprofit doing direct, grassroots work to strengthen local communities. We began by selling merchandise and sharing our story on social media; anyone can support us by buying our products or joining the team. Every purchase and every volunteer helps fund projects that improve neighborhoods and uplift people, celebrating how our differences connect and make us stronger.</p>
                </div>
            </div>
        </div>

    <div className = "cards"> 
    <BlankCards images={[volunteer, HoneyBadger, team]} labels={['Volunteer', 'Scholarship', 'Contact']} items={[{ href: '/volunteer', label: 'Volunteer' }, { href: '/Scholarship', label: 'Scholarship' }, { href: '/contact', label: 'Contact' }]} />
    </div>
     <Flashcards />

        </>
    );
};

export default Home;
