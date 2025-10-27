import ScholarshipCards from "../components/ScholarshipCards";
import ScholarshipWinners from "../components/ScholarshipWinners";
import "./../css/ScholarshipCards.css";
import "./../css/ScholarshipWinner.css";
import volunteer from "../images/volunteer.jpeg";
import spartan from "../images/spartan.jpeg";
const Scholarship = () => {
	return (
		<div id="scholarship">
			<h1>Scholarship</h1>
			<ScholarshipCards items={[
				{
					img: volunteer,
					title: "Scholarship 1",
					desc: "Description for scholarship 1",
					href: "/scholarship/1"
				},
				{
					img: volunteer,
					title: "Scholarship 2",
					desc: "Description for scholarship 2",
					href: "/scholarship/2"
				},
				// Add more scholarship items as needed
			]} />


			<ScholarshipWinners items={[
				{
					title: "Volunteer Winner 1",
					text: "Description for volunteer winner 1",
					img: volunteer,
					href: "/volunteer/winner/1"
				},
				{
					title: "Volunteer Winner 2",
					text: "Description for volunteer winner 2",
					img: spartan,
					href: "/volunteer/winner/2"
				},
				// Add more volunteer winners as needed
			]} />
		</div>
	);
};



export default Scholarship;