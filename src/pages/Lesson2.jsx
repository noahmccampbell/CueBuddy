import React, { useState } from "react";
import "./Lesson2.css";

export default function Lesson2() {

        const questions = [
            { 
                question: "What emotion is shown in this gesture?",
                image: <img src= "https://example.com/gesture.jpg" />, 
                answers: ["Excitement", "Defensiveness", "Happiness", "Sleepiness"],
                correct: 1
            },
            { 
                question: "What emotion is shown in this gesture?",
                image: <img src= "https://example.com/gesture.jpg" />, 
                answers: ["Excitement", "Defensiveness", "Happiness", "Sleepiness"],
                correct: 1
            },
            // Add more questions...
        ];
    
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [selectedAnswer, setSelectedAnswer] = useState(null);
        const [score, setScore] = useState(0);
        const [showResult, setShowResult] = useState(false);
    
        function handleAnswer(index) {
            setSelectedAnswer(index);
            if (index === questions[currentQuestion].correct) {
                setScore(score + 1);
            }
        }
    
        function nextQuestion() {
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            } else {
                setShowResult(true);
            }
        }
    
        return (
            <div className="quiz-container">
                {!showResult ? (
                    <div>
                        <h2>{questions[currentQuestion].question}</h2>
                        <img 
                            src={questions[currentQuestion].image} 
                            alt="Question Image" 
                            style={{ width: "300px", height: "auto", marginBottom: "10px" }}
                        />
                        <div>
                            {questions[currentQuestion].answers.map((answer, index) => (
                                <button
                                    key={index}
                                    className={`btn ${selectedAnswer === index ? (index === questions[currentQuestion].correct ? "correct" : "wrong") : ""}`}
                                    onClick={() => handleAnswer(index)}
                                >
                                    {answer}
                                </button>
                            ))}
                        </div>
                        {selectedAnswer !== null && (
                            <button onClick={nextQuestion}>Next</button>
                        )}
                    </div>
                ) : (
                    <h2>Your Score: {score} / {questions.length}</h2>
                )}
            </div>
        );
    }