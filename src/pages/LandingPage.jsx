import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const topics = [
  { 
    id: 1, 
    title: "Facial Expressions", 
    destination: "/lessons/lesson1",
    subtopics: ["Smiling", "Frowning", "Surprised Look"]
    },
    { id: 2, title: "Topic 2" },
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
        <p className="typing-text">Hello {username !== "" ? username : "Student"}!</p>
        <h1>Let's get started on today's lesson 😊</h1>
      </div>

      {showScrollText && <p className="scroll-down">↓ Scroll Down</p>}

      <h1 className="lessonTitle">Lessons</h1>

      <div className="roadmap">
        {topics.map((topic, index) => (
          <div 
            key={topic.id} 
            className="topic-container"
            onMouseEnter={() => setHoveredTopic(topic.id)}
            onMouseLeave={() => setHoveredTopic(null)}
          >
            <Link to={topic.destination} className="circle">
              {topic.title}
            </Link>

            {hoveredTopic === topic.id && (
              <div className="subtopics">
                {topic.subtopics.map((subtopic, subIndex) => (
                  <div key={subIndex} className="subtopic">
                    {subtopic}
                  </div>
                ))}
              </div>
            )}

            {index < topics.length - 1 && <div className="line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};


export default LandingPage;
