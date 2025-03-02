import React, { useState } from "react";
import "./Lesson1.css";

const Lesson1 = () => {
  const flashcards = [
    { question: "What is 2 + 2?", answer: "Happy" },
    { question: "Capital of France?", answer: "Paris" },
    { question: "Largest planet?", answer: "Jupiter" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setFlipped(false); // Reset flip when moving to next card
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className="lesson-container">
      <div
        className={`flashcard ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="front">{flashcards[currentIndex].question}</div>
        <div className="back">{flashcards[currentIndex].answer}</div>
      </div>
      <button className="next-button" onClick={nextCard}>Next</button>
    </div>
  );
};

export default Lesson1;
