import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/CardsCarousel.css';

const CardsCarousel = ({ items = [], visible = 3 }) => {
  const [start, setStart] = useState(0);
  const total = items.length;

  const next = () => setStart(s => (s + visible) % Math.max(total, 1));
  const prev = () => setStart(s => (s - visible + total) % Math.max(total, 1));

  const slice = [];
  for (let i = 0; i < visible; i++) {
    slice.push(items[(start + i) % total]);
  }

  return (
    <div className="cards-carousel">
      <button className="carousel-arrow carousel-prev" onClick={prev} aria-label="Previous">‹</button>

      <div className="cards-track">
        {slice.map((it, idx) => {
          // support both `img` and `image`, `desc` and `description`, `href` and `link`
          const src = it.img || it.image || '';
          const desc = it.desc || it.description || '';
          const href = it.href || it.link || '';
          const meta = it.meta || '';
          const linkText = it.cta || it.linkText || it.buttonText || it.label || '';

          const content = (
            <>
              {src ? (
                <div className="ccard-media" style={{ backgroundImage: `url(${src})` }} />
              ) : null}
              <div className="ccard-body">
                <h3 className="ccard-title">{it.title}</h3>
                <div className="ccard-meta">{meta}</div>
                <p className="ccard-desc">{desc}</p>
                {href ? <div className="ccard-cta">{linkText}</div> : null}
              </div>
            </>
          );

          if (href) {
            // internal route
            if (href.startsWith('/')) {
              return (
                <Link key={idx} to={href} className="ccard" aria-label={`${it.title} - ${linkText}`}>
                  {content}
                </Link>
              );
            }

            // external link
            return (
              <a key={idx} href={href} className="ccard" target="_blank" rel="noopener noreferrer" aria-label={`${it.title} - ${linkText}`}>
                {content}
              </a>
            );
          }

          // no link provided: render static article
          return (
            <article key={idx} className="ccard">
              {content}
            </article>
          );
        })}
      </div>

      <button className="carousel-arrow carousel-next" onClick={next} aria-label="Next">›</button>
    </div>
  );
};

export default CardsCarousel;
