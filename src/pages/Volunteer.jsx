import ".././css/VolunteerBoxes.css";
import ".././css/Volunteer.css";
import BigHeader from "../components/BigHeader.jsx";
import VolunteerBoxes from "../components/VolunteerBoxes.jsx";
import trash from "../images/trash.jpeg";
import Community from "../images/volunteer.jpeg";
import logo from "../images/logo1.jpg";
import leaf from "../images/leaf.png";
import nature from "../images/nature.webp"
import cocky from "../images/cocky.jpeg";

const Volunteer = () => {
	return (
		<> 
		<BigHeader image={cocky} title={"Volunteer"} />
		<div id="volunteer">
			<VolunteerBoxes items={[

				{
					title: "Volunteering Individually",
					text: "Help us plan and execute community events.",
					img: trash,
					href: "#"
				},
				{
					title: "Community Clean-Up",
					text: "Join us for a day of cleaning up our local parks.",
					img: Community,
					href: "#"
				},
				{
					title: "Food Drive",
					text: "Help us collect food for those in need.",
					img: logo,
					href: "#"
				},
				// Add more volunteer opportunities as needed
			]} />
		</div>
		</>
	);
};
export default Volunteer;