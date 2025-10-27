import { Link } from "react-router-dom";
import "./../css/VolunteerBoxes.css";

const VolunteerBoxes = ({ items = [] }) => {
    // items: [{ title, text, img, href }]
    return (
        <section className="volunteer-boxes">
            {items.map((it, idx) => (
                <article className="volunteer-box" key={idx}>
                    <div className="volunteer-box__text">
                        {it.title && <h3>{it.title}</h3>}
                        {it.text && <p>{it.text}</p>}
                        {it.href && (
                            <Link to={it.href} className="volunteer-box__cta">Learn more</Link>
                        )}
                    </div>
                    <div
                        className="volunteer-box__image"
                        style={it.img ? { backgroundImage: `url(${it.img})` } : {}}
                        role={it.img ? 'img' : undefined}
                        aria-label={it.title || `volunteer ${idx + 1}`}
                    />
                </article>
            ))}
        </section>
    );
}

export default VolunteerBoxes;