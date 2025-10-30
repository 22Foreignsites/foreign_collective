import ".././css/Merch.css";
import Apparel from "../components/Gallery.jsx";
import BigHeader from "../components/BigHeader.jsx";
import SideMen from "../ImgMerch/merch1t.jpeg";
import nb from "../ImgMerch/nb.png";
//Images for first merch items
import explorerHoodie from "../ImgGallery/exp.avif";
import nomadPants from "../ImgGallery/np.jpeg";
import Wanderer from "../ImgGallery/wt.avif";
//Images for second merch items
import nbb from "../ImgGallery/nbh.jpg";
import nbgh from "../ImgGallery/nbgh.jpg";
import nbp from "../ImgGallery/nbp.webp";


const Merch = () => {
	return (
		<>
				<BigHeader image={SideMen} position="left top" title="Our Merchandise" subtitle="Wear your support proudly." />

			<div id="merch" className="main-content">
			
			<div className="columns">
				<Apparel image = {explorerHoodie} name = "Continental Explorer Hoodie" price = "$99.00" />
				<Apparel image = {nomadPants} name = "Nomad Vision Pants" price = "$89.00" />
				<Apparel image = {Wanderer} name = "Wanderer Classic Shirt" price = "$54.00" />
			</div>
			</div>
			
				<BigHeader image={nb} position="left top" title="Our Merchandise" subtitle="Wear your support proudly." />

			<div id="merch" className="main-content">
			<div className="columns">
				<Apparel image = {nbb} name = "Foreign Dream Hoodie" price = "$103.00" />
				<Apparel image = {nbgh} name = "Greying Out Hoodie" price = "$103.00" />
				<Apparel image = {nbp} name = "22Pants" price = "$35.00" />
			</div>
		</div>
		</>
	);
};

export default Merch;