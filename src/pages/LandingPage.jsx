import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const topics = [
  { id: 1, title: "Topic 1", destination: "/lessons/lesson1" },
  { id: 2, title: "Topic 2" , destination: "/lessons/lesson2"} ,
  { id: 3, title: "Topic 3" },
  { id: 4, title: "Topic 4" },
  { id: 5, title: "Topic 5" },
];

const LandingPage = () => {
  const username = useSelector((state) => state.user.username);
  const [showScrollText, setShowScrollText] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Hide the scroll-down text when the user scrolls down
      if (window.scrollY > 100) {
        setShowScrollText(false);
      } else {
        setShowScrollText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page-container">
      <div className="section">
      <p className="typing-text">Hello {(username != '') ? username : "Student"}!</p>
        <h1>Let's get started on today's lesson :&#41;</h1>
      </div>
      {showScrollText && <p className="scroll-down">↓ Scroll Down</p>}
      <h1 className = "lessonTitle">Lessons</h1>
      <div className="next-section">
        {topics.map((topic, index) => (
          <Link to={topic.destination}>
            <div key={topic.id} className="topic">
              <div className="circle" onClick={() => navigate(topic.path)}>
              {topic.id}
            </div>
              {index < topics.length - 1 && <div className="line"></div>}
              </div>
          </Link>
        ))}
      </div>
      <div className="daily-challenge">
        <p>Today's Daily Challenge:</p>
        <h1>Introduce yourself to a new person!</h1>
      </div>
    </div>
  );
};

export default LandingPage;