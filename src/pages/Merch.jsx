import ".././css/Merch.css";
import Apparel from "../components/Gallery.jsx";
import BigHeader from "../components/BigHeader.jsx";
import SideMen from "../ImgMerch/merch1t.jpeg";


const Merch = () => {
	return (
		<>
			<div id="headerImg" className="header-image">
				<BigHeader image={SideMen} position="left top" title="Our Merchandise" subtitle="Wear your support proudly." />
			</div>

			<div id="merch" className="main-content">
			<h1>Merch</h1>
			
			<div className="columns">
				<Apparel name = "Continental Explorer Hoodie" price = "$99.00" />
				<Apparel name = "Nomad Vision Pants" price = "$89.00" />
				<Apparel name = "Wanderer Classic Shirt" price = "$54.00" />
			</div>

			<div id="headerImg" className="header-image">
				<BigHeader image={SideMen} position="left top" title="Our Merchandise" subtitle="Wear your support proudly." />
			</div>

			<div className="columns">
				<Apparel name = "Continental Explorer Hoodie" price = "$99.00" />
				<Apparel name = "Nomad Vision Pants" price = "$89.00" />
				<Apparel name = "Wanderer Classic Shirt" price = "$54.00" />
			</div>
		</div>
		</>
	);
};

export default Merch;