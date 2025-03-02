import React, { useState } from "react";
import "./Lesson2.css";

const questions = [
  {
    id: 1,
    question: "You see your friend with tears streaming down their face. What could they be feeling?",
    options: ["Their dog passed away", "They are laughing at a joke", "They are tired from a long day", "They are excited about a promotion"],
    answer: 0,
    action: "Give them a hug or offer kind words like, 'I’m here for you.'"
  },
  {
    id: 2,
    question: "A man keeps looking at his watch while you talk to him. What does this likely mean?",
    options: ["He is in a hurry", "He likes your story", "He is thinking about lunch", "He is trying to remember the time"],
    answer: 0,
    action: "Ask, 'Do you need to go?' and offer to talk later."
  },
  {
    id: 3,
    question: "Your friend has their arms crossed and is looking down. How might they be feeling?",
    options: ["Happy", "Sad or upset", "Excited", "Sleepy"],
    answer: 1,
    action: "Say, 'You seem upset. Do you want to talk about it?'"
  },
  {
    id: 4,
    question: "Your friend is laughing and clapping their hands. What does this likely mean?",
    options: ["They are feeling happy or excited", "They are upset about something", "They are thinking about what to say next", "They are trying to take a break"],
    answer: 0,
    action: "Laugh with them! Sharing laughter strengthens friendships."
  },
  {
    id: 5,
    question: "You see two people standing close together and talking quietly. What are they doing?",
    options: ["Arguing", "Sharing a secret", "Playing a game", "Ignoring each other"],
    answer: 1,
    action: "It may be private, so give them some space. You can talk to them later."
  },
  {
    id: 6,
    question: "You are talking to a friend, and they suddenly start looking around the room and checking their phone. What might this mean?",
    options: ["They are distracted or not fully paying attention", "They are excited to keep talking", "They want to hear more from you", "They are practicing looking around"],
    answer: 0,
    action: "Say, 'Is everything okay? Should we talk later?'"
  },
  {
    id: 7,
    question: "Your friend sighs loudly and drops their shoulders. What might this mean?",
    options: ["They are feeling tired or frustrated", "They are stretching", "They are happy", "They are playing a game"],
    answer: 0,
    action: "Offer support! Ask, 'Do you need a break or want to talk about it?'"
  }
];

function Lesson2() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="quiz-container">
      <h1>Social Cues Quiz</h1>
      <div className="question-box">
        <p className="question">{questions[currentQuestion].question}</p>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${selectedOption === index ? (index === questions[currentQuestion].answer ? "correct" : "incorrect") : ""}`}
              onClick={() => handleOptionClick(index)}
              disabled={showAnswer}
            >
              {option}
            </button>
          ))}
        </div>
        {showAnswer && (
          <div className="answer-box">
            <p className={selectedOption === questions[currentQuestion].answer ? "correct-text" : "incorrect-text"}>
              {selectedOption === questions[currentQuestion].answer ? "✅ Correct!" : "❌ Incorrect! The right answer is: " + questions[currentQuestion].options[questions[currentQuestion].answer]}
            </p>
            <p className="action">{questions[currentQuestion].action}</p>
            <button className="next-btn" onClick={handleNextQuestion}>Next Question</button>
            <button className="home-button" onClick={() => navigate("/landing")}>Home</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lesson2;
