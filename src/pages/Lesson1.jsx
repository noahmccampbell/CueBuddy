import React, { useState } from "react";
import "./Lesson1.css";
import { useNavigate } from "react-router-dom";

const Lesson1 = () => {
  const flashcards = [
    { 
      type: "image", 
      question: "https://i.ytimg.com/vi/f8OmSWxF6h8/maxresdefault.jpg",  
      answer: "Joy" 
    },
    { 
      type: "image", 
      question: "https://i.pinimg.com/736x/ca/ac/19/caac1988070f9e53ef31bfb900b352d6.jpg", 
      answer: "Sadness" 
    },
    { 
      type: "image", 
      question: "https://img.freepik.com/premium-photo/angry-mad-face-asian-man-blue-t-shirt-isolated-wall_39688-4145.jpg", 
      answer: "Anger" 
    },
    { 
      type: "image", 
      question: "https://www.shutterstock.com/image-photo/waistup-shot-freaked-out-scared-260nw-1315763924.jpg", 
      answer: "Fear" 
    },
    { 
      type: "image", 
      question: "https://t4.ftcdn.net/jpg/01/22/33/55/360_F_122335513_GB4jSOLOix2BTYODKet4qWJH7AEaEszL.jpg",  
      answer: "Joy" 
    },
    { 
      type: "image", 
      question: "https://d2thvodm3xyo6j.cloudfront.net/media/2020/10/ce51857598cc4658-600x338.jpg", 
      answer: "Sadness" 
    },
    { 
      type: "image", 
      question: "https://www.shutterstock.com/shutterstock/videos/1103085867/thumb/1.jpg?ip=x480", 
      answer: "Anger" 
    },
    { 
      type: "image", 
      question: "https://www.shutterstock.com/shutterstock/videos/27851020/thumb/3.jpg?ip=x480", 
      answer: "Fear" 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  const handleNextCard = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1: Emotions</h1>
      <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
        <div className="front">
          {flashcards[currentIndex].type === "image" ? (
            <img 
              src={flashcards[currentIndex].question} 
              alt="Flashcard" 
              className="flashcard-image"
            />
          ) : (
            <p className="flashcard-text">{flashcards[currentIndex].question}</p>
          )}
        </div>
        <div className="back">
          <p className="flashcard-text">{flashcards[currentIndex].answer}</p>
        </div>
      </div>
      <button className="next-button" onClick={handleNextCard}>Next</button>
      <button className="quiz-button" onClick={() => navigate("/quiz1")}>Quiz</button>
      <button className="home-button" onClick={() => navigate("/landing")}>Home</button>
    </div>
  );
};

export default Lesson1;
