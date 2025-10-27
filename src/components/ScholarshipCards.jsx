import { Link } from "react-router-dom";
import "./../css/ScholarshipCards.css";

const ScholarshipCards = ({ items = [] }) => {
    // items: [{ img, title, desc, href }]
    return (
        <div className="scholarship-cards" id="scholarship-cards">
            {items.map((it, i) => (
                <article className="scholarship-card" key={i}>
                    <div className="scholarship-card__media" style={it.img ? { backgroundImage: `url(${it.img})` } : {}} role={it.img ? 'img' : undefined} aria-label={it.title || `scholarship ${i+1}`} />
                    <div className="scholarship-card__body">
                        {it.title && <h3 className="scholarship-card__title">{it.title}</h3>}
                        {it.desc && <p className="scholarship-card__desc">{it.desc}</p>}
                        {it.href && <Link to={it.href} className="scholarship-card__link">Apply / Details</Link>}
                    </div>
                </article>
            ))}
        </div>
    );
};

export default ScholarshipCards;

       

