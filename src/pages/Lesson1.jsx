import React, { useState } from "react";
import "./Lesson1.css";

const Lesson1 = () => {
  const flashcards = [
    { type: "image", question: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnz.pinterest.com%2Fpin%2Fhandsome-man-png-transparent-happy-smiling-face-portrait--591941944780681811%2F&psig=AOvVaw1dz7vHEB7I_zofBs2CrBUd&ust=1740969638052000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiP38-v6osDFQAAAAAdAAAAABAI", answer: "Happy" },
    { type: "image", question: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Fsad-face-woman&psig=AOvVaw25GrnnFP0Qlc4ov3hLqSPw&ust=1740969760401000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLijroyw6osDFQAAAAAdAAAAABAJ", answer: "Sad" },
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
        <div className="front">
          {flashcards[currentIndex].type === "text" ? (
            <p>{flashcards[currentIndex].question}</p>
          ) : (
            <img src={flashcards[currentIndex].question} alt="Question" className="flashcard-image" />
          )}
        </div>
        <div className="back">
          <p>{flashcards[currentIndex].answer}</p>
        </div>
      </div>
      <button className="next-button" onClick={nextCard}>Next</button>
    </div>
  );
};

export default Lesson1;
