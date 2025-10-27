import ContactTextBoxes from "../components/ContactTextBoxes";
import "./../css/ContactTextBoxes.css";
import "./../css/Contact.css";

const Contact = () => {
	return (
		<div id="contact">
			<h1>Contact</h1>
			<p>Get in touch with us!</p>

			<div className="contact-layout">
				<div className="contact-left">
					<ContactTextBoxes />
				</div>

				<div className="contact-right">
					<h2>Visit Us</h2>
					<p>We'd love to meet you. Here's where to find us and how to get in touch.</p>
					<h3>Our Location</h3>
					<iframe title="map" src="https://www.example.com" style={{width:'100%', height: '240px', border:0}} />
				</div>
			</div>
		</div>
	);
};

export default Contact;