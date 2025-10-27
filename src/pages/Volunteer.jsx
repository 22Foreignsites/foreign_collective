import ".././css/VolunteerBoxes.css";
import VolunteerBoxes from "../components/VolunteerBoxes.jsx";
import trash from "../images/trash.jpeg";
import Community from "../images/volunteer.jpeg";
import logo from "../images/logo1.jpg";

const Volunteer = () => {
	return (
		<div id="volunteer">
			<h1>Volunteer</h1>
			<VolunteerBoxes items={[

				{
					title: "Volunteering Individually",
					text: "Help us plan and execute community events.",
					img: trash,
					href: "/volunteer/event-organizer"
				},
				{
					title: "Community Clean-Up",
					text: "Join us for a day of cleaning up our local parks.",
					img: Community,
					href: "/volunteer/community-cleanup"
				},
				{
					title: "Food Drive",
					text: "Help us collect food for those in need.",
					img: logo,
					href: "/volunteer/food-drive"
				},
				// Add more volunteer opportunities as needed
			]} />
			<p>Check out our volunteer opportunities here.</p>
		</div>
	);
};
export default Volunteer;