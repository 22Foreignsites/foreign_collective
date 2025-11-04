import ".././css/VolunteerBoxes.css";
import ".././css/Volunteer.css";
import CardsCarousel from "../components/CardsCarousel.jsx";
import BigHeader from "../components/BigHeader.jsx";
import VolunteerBoxes from "../components/VolunteerBoxes.jsx";
import trash from "../images/trash.jpeg";
import Community from "../images/volunteer.jpeg";
import logo from "../images/logo1.jpg";
import leaf from "../images/leaf.png";
import nature from "../images/nature.webp"
import cocky from "../images/cocky.jpeg";
import individual from "../ImgGallery/IndvVol.webp"
import AnimalShelter from "../ImgGallery/AnimalShelter.webp"
import ParkCleanUp from "../ImgGallery/ParkCleanUp.webp"
import SoupKithcen from "../ImgGallery/SoupKitchen.webp"
import HighwayCleanUp from "../ImgGallery/HighwayCleanup.webp"
import Marathon from "../ImgGallery/Marathon.webp"

const Volunteer = () => {
	return (
		<> 
		
		<BigHeader image={cocky} title={"Volunteer"} />
		<div className = "CardsCarousel">
		<h1> Volunteer Individually</h1>
		<CardsCarousel items={[
			{
				image: individual,
				title: "Volunteering Individually",
				description: "Contribute to conservation and community projects on your own schedule — tasks include habitat restoration, native plantings, and citizen science monitoring. No prior experience required.",
				link: "#",
			},
			{
				image: AnimalShelter,
				title: "Community Clean-Up",
				description: "Support animal welfare by helping at shelters: feed, socialize, clean, and provide enrichment to improve animals' chances of adoption and well-being.",
				link: "#",
			},
			{
				image: SoupKithcen,
				title: "Food Drive",
				description: "Provide direct help to people experiencing food insecurity through meal prep, packing, and distribution — a hands-on way to make an immediate difference.",
				link: "#",
			},
		]}
		/>
		</div>

		<div className = "CardsCarousel">
		<h1> Group Volunteering</h1>
		<CardsCarousel items={[
			{
				image: Marathon,
				title: "Volunteering Individually",
				description: "Join a team supporting charity runs and events — roles include registration, aid stations, crowd guidance, and logistics to ensure a safe, successful day.",
				link: "#"
			},
			{
				image: Community,
				title: "Community Clean-Up",
				description: "Work with others on large-scale clean-ups and beautification projects: litter removal, invasive species removal, and creating welcoming public spaces.",
				link: "#"
			},
			{
				image: SoupKithcen,
				title: "Food Drive",
				description: "Collaborate to run food drives and meal programs — sort donations, pack boxes, and coordinate distribution with partner organizations to reach more people.",
				link: "#"
			},
		]} />
		</div>


		<div className = "CardsCarousel">
		<h1> Community Help</h1>
		<CardsCarousel items={[
			{
				image: ParkCleanUp,
				title: "Volunteering Individually",
				description: "Help restore parks and trails by removing debris, planting trees and native plants, and maintaining pathways to create healthier, more accessible green spaces.",
				link: "#"
			},
			{
				image: HighwayCleanUp,
				title: "Community Clean-Up",
				description: "Join roadside cleanup crews focused on litter removal, recycling, and safety measures that protect wildlife and improve the appearance of our highways.",
				link: "#"
			},
			{
				image: logo,
				title: "Food Drive",
				description: "Organize and run community donation efforts — manage collection sites, coordinate volunteers, and ensure donations are distributed efficiently to those in need.",
				link: "#"
			},
		]} />
		</div>
		{/* <div id="volunteer">
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
		</div> */}
		</>
	);
};
export default Volunteer;