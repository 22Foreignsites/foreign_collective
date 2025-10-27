import { Link } from "react-router-dom";
import "./../css/ScholarshipWinner.css";

const ScholarshipWinners = ({ items = [] }) => {
    // items: [{ title, text, img, href }]
    return (
        <section className="scholarship-winners">
            {items.map((it, idx) => (
                <article className="scholarship-winner" key={idx}>
                    <div className="scholarship-winner__text">
                        {it.title && <h3>{it.title}</h3>}
                        {it.text && <p>{it.text}</p>}
                        {it.href && (
                            <Link to={it.href} className="scholarship-winner__cta">Learn more</Link>
                        )}
                    </div>
                    <div
                        className="scholarship-winner__image"
                        style={it.img ? { backgroundImage: `url(${it.img})` } : {}}
                        role={it.img ? 'img' : undefined}
                        aria-label={it.title || `Scholarship ${idx + 1}`}
                    />
                </article>
            ))}
        </section>
    );
}

export default ScholarshipWinners;