import{Link} from "react-router-dom";
import "./../css/BlankCards.css";

const BlankCards = ({ items = [], images = [], labels = [], count = 3, columns = 3 }) => {
	const boxes = Array.from({ length: count }).map((_, i) => {
		const item = items[i] || {};
		const img = item.src || images[i];
		const label = item.label || labels[i];
		const href = item.href;
		const target = item.target;
		const style = img ? { backgroundImage: `url(${img})` } : {};

		return (
			<div
				className={`blank-card ${img ? 'blank-card--img' : ''}`}
				key={i}
				style={style}
				role={img ? 'img' : undefined}
				aria-label={img ? `card ${i + 1}` : undefined}
			>
				{label && href ? (
					href.startsWith('/') ? (
						<Link className="blank-card__label blank-card__link" to={href}>
							{label}
						</Link>
					) : (
						<a className="blank-card__label blank-card__link" href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
							{label}
						</a>
					)
				) : (
					label && <div className="blank-card__label">{label}</div>
				)}
			</div>
		);
	});

	const gridStyle = {
		gridTemplateColumns: `repeat(${columns}, 1fr)`,
	};

	return (
		<div className="blank-cards" style={gridStyle}>
			{boxes}
		</div>
	);
};

export default BlankCards;

