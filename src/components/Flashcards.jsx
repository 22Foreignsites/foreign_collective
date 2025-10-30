import React, { useEffect, useState, useCallback } from "react";
import "../css/Flashcards.css";

const defaultCards = [
  { front: "What is The Foreign Collective?", back: "A nonprofit doing direct, grassroots work to strengthen local communities." },
  { front: "How can you help?", back: "Buy merch, volunteer, or support our projects." },
  { front: "Our mission", back: "Celebrate differences that connect and make us stronger." },
];

function Flashcards({ cards = defaultCards }) {
  const [deck, setDeck] = useState(cards.slice());
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setDeck(cards.slice());
    setIndex(0);
    setFlipped(false);
  }, [cards]);

  useEffect(() => {
    setFlipped(false);
  }, [index]);

  const next = useCallback(() => setIndex((i) => (i + 1) % deck.length), [deck.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + deck.length) % deck.length), [deck.length]);
  const toggle = () => setFlipped((f) => !f);

  const shuffle = () => {
    const arr = deck.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setDeck(arr);
    setIndex(0);
    setFlipped(false);
  };

  const onKeyDown = (e) => {
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      toggle();
    }
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  if (!deck || deck.length === 0) return null;

  return (
    <div className="flashcards" onKeyDown={onKeyDown} tabIndex={0} aria-label="Flashcards widget. Press space to flip, arrow keys to navigate.">
      <div className="flashcards__controls">
        <button type="button" onClick={prev} aria-label="Previous card">Prev</button>
        <button type="button" onClick={toggle} aria-pressed={flipped}>{flipped ? "Show Front" : "Flip"}</button>
        <button type="button" onClick={next} aria-label="Next card">Next</button>
        <button type="button" onClick={shuffle}>Shuffle</button>
      </div>

      <div className="flashcards__card-wrapper">
        <div
          className={`flashcard ${flipped ? "is-flipped" : ""}`}
          onClick={toggle}
          role="button"
          tabIndex={0}
          aria-pressed={flipped}
        >
          <div className="flashcard__face flashcard__face--front">{deck[index].front}</div>
          <div className="flashcard__face flashcard__face--back">{deck[index].back}</div>
        </div>
      </div>

      <div className="flashcards__status" aria-live="polite">{index + 1} / {deck.length}</div>
    </div>
  );
}

export default Flashcards;
