import ContactTextBoxes from "../components/ContactTextBoxes";
import "./../css/ContactTextBoxes.css";
import "./../css/Contact.css";
import BigHeader from "../components/BigHeader";
import {useState} from "react";
import house from "../images/house.jpg";
import me from "../images/house.jpeg";
import movie from "../images/movie.mp4";
import WorkingContact from "../components/WorkingContact.jsx";

const Contact = () => {
	return (
		<>
			<BigHeader image={movie} position="center" title="Contact Me" subtitle="Lets us connect " />

			<div id="contact">
				<h1>Contact</h1>
				<p>Get in touch with us!</p>

				<div className="contact-layout">
					<div className="contact-left">
						<WorkingContact />
					</div>

					<div className="contact-right">
						<h2>Visit Us</h2>
						<p>We'd love to meet you. Here's where to find us and how to get in touch.</p>
						<h3>Our Location</h3>
						<div className="address">
							<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1654.1033453828752!2d-81.03056245924259!3d33.987224393265144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bad8ce23f137%3A0xc1963e5dd9485c36!2sWhaley%20St%2C%20Columbia%2C%20SC%2029201!5e0!3m2!1sen!2sus!4v1761615773746!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;


