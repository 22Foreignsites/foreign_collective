import React from "react";
import ScholarshipCards from "../components/ScholarshipCards";
import ScholarshipWinners from "../components/ScholarshipWinners";
import "./../css/Scholarship.css";
import "./../css/ScholarshipCards.css";
import "./../css/ScholarshipWinner.css";
import volunteer from "../images/volunteer.jpeg";
import spartan from "../images/spartan.jpeg";
import HoneyBadger from "../images/HoneyBadger.webp";
import BigHeader from "../components/BigHeader";
import HoneyBadgerC from "../images/HoneyBadgerC.jpg";
import HoneyBadgerA from "../images/HoneyBadgerA.webp";
import Sleeping from "../images/HoneyBadgerSleeping.webp"
const Scholarship = () => {
	return (
		<>
		<div className="break"> 
				<div className="scholarship-header">
				<BigHeader image={HoneyBadgerC} showOverlay={false}/>
				</div>
			 </div>

		<div className="text">
				<h1>Funding your future</h1>
				<p><strong>I have a dream</strong> that I would be able to fund somebody journey into doing what they want to, regardless of social status, background or anything to that nature. I want my scholarship to reflect that. I want the scrapiest person, and a person to do whatever it takes to complete that dream which is why our logo for our scholarships is rsymboled by a honey badger. Even though a honey bader is not the biggest,strongest or fastest animal in the african animal kingdom. It has the heart like it is the biggest, strongest, and fastest and will stop at nothing to get what it wants. If you think your like a honey badger and will stop at nothing to accomplish your dream. This scholarship is for for you.</p>
				</div>

			<div id="scholarship">
			<ScholarshipCards items={[
				{
					img: Sleeping,
					title: "Honey Badger Scholarship",
					desc:"Made for the scrappiest individuals who will stop at nothing to achieve their dreams. This scholarship celebrates those who move with purpose, not privilege — the ones who keep pushing, even when the odds say stop.Like the honey badger, you might not be the biggest, fastest, or strongest, but you’ve got the heart and grit to keep going when others quit.",
					// "Made for the scrappiest individuals who will stop at nothing to achieve their dreams."
					// "Made for the scrappiest individuals who will stop at nothing to achieve their dreams. This scholarship celebrates those who move with purpose, not privilege — the ones who keep pushing, even when the odds say stop.Like the honey badger, you might not be the biggest, fastest, or strongest, but you’ve got the heart and grit to keep going when others quit. You dream boldly, fight fiercely, and rest only to rise again stronger.This scholarship exists to back that spirit — to invest in those who dare to chase their dreams with unshakable determination, no matter where they start or how many times they fall."
					href: "/scholarship/1"
				},
				// Add more scholarship items as needed
			]} />


			{/* <ScholarshipWinners items={[
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
				}, */}
			{/* ]} /> */}

		</div>
		</>
	);
};



export default Scholarship;