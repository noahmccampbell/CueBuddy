import React, { useState } from "react";
import "./quiz1.css";
import { useNavigate } from "react-router-dom";

export default function quiz1() {

        const questions = [
            { 
                // happy
                question: "Question 1: What emotion is shown in this photo?",
                image: "https://www.intofilm.org/intofilm-production/scaledcropped/1096x548https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__3143-the-pursuit-of-happyness--hi_res-008f2e57.jpg/film__3143-the-pursuit-of-happyness--hi_res-008f2e57.jpg", 
                answers: ["Sadness", "Defensiveness", "Joy", "Fear"],
                correct: 3
            },
            { 
                // sadness
                question: "Question 2: What emotion is shown in this photo?",
                image: "https://bookandfilmglobe.com/wp-content/uploads/2019/10/interstellar-mcconaughey.png", 
                answers: ["Sadness", "Defensiveness", "Joy", "Fear"],
                correct: 1
            },
            {
                // anger
                question: "Question 3: What emotion is shown in this photo?",
                image: "https://i.ytimg.com/vi/UMUfZl8PSiw/maxresdefault.jpg", 
                answers: ["Sadness", "Anger", "Joy", "Fear"],
                correct: 2
            },
            {
                // happy
                question: "Question 4: What emotion is shown in this photo?",
                image: "https://www.ocregister.com/wp-content/uploads/migration/kpm/kpmthv-19somovie1large.jpg?w=1200&resize=1200,900", 
                answers: ["Sadness", "Anger", "Joy", "Fear"],
                correct: 3
            },
            {
                // sad
                question: "Question 5: What emotion is shown in this photo?",
                image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/emmett-till-s-mother-in-the-sad-2022-movie-till.jpg", 
                answers: ["Sadness", "Anger", "Joy", "Fear"],
                correct: 1
            }
            ,{
                // fear
                question: "Question 6: What emotion is shown in this photo?",
                image: "https://www.hollywoodreporter.com/wp-content/uploads/2012/11/fly_me_to_the_moon_film_still_a_l.jpg", 
                answers: ["Sadness", "Anger", "Joy", "Fear"],
                correct: 4
            }, 
            {
                // sad
                question: "Question 7: What emotion is shown in this photo?",
                image: "https://wallpapercat.com/w/full/c/c/f/1002142-3840x2160-desktop-4k-detachment-2011-wallpaper-photo.jpg", 
                answers: ["Sadness", "Anger", "Joy", "Fear"],
                correct: 1
            },

        ];
    
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [selectedAnswer, setSelectedAnswer] = useState(null);
        const [score, setScore] = useState(0);
        const [showResult, setShowResult] = useState(false);
        const navigate = useNavigate();
    
        function handleAnswer(index) {
            setSelectedAnswer(index);
            if (index === questions[currentQuestion].correct - 1) {
                setScore(score + 1);
            }
        }
        
        function getButtonClass(index) {
            if (selectedAnswer === null) return ""; // No selection yet
            if (index === questions[currentQuestion].correct - 1) return "correct"; // Correct answer
            if (index === selectedAnswer) return "wrong"; // Incorrect selected answer
            return ""; // Default
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
    
                        />
                        <div>
                        {questions[currentQuestion].answers.map((answer, index) => (
                                <button
                                    key={index}
                                    className={`btn ${getButtonClass(index)}`}
                                    onClick={() => handleAnswer(index)}
                                    disabled={selectedAnswer !== null} // Disable after selecting
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
                <button className="home-button" onClick={() => navigate("/landing")}>Home</button>
            </div>
        );
    }