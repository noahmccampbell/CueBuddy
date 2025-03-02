import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const topics = [
  {
    id: 1,
    title: "Topic 1",
    destination: "/lessons/lesson1",
    subtopics: [
      { id: "lesson1", title: "Lesson 1", path: "/lessons/lesson1" },
      { id: "lesson2", title: "Lesson 2", path: "/lessons/lesson2" },
      { id: "quiz", title: "Quiz", path: "/quiz1" },
    ],
  },
  { id: 2, title: "Topic 2" , destination: "/lesson2"} ,
  { id: 3, title: "Topic 3" },
  { id: 4, title: "Topic 4" },
  { id: 5, title: "Topic 5" },
];

const LandingPage = () => {
  const username = useSelector((state) => state.user.username);
  const [showScrollText, setShowScrollText] = useState(true);
  const [visibleSubtopics, setVisibleSubtopics] = useState(null);

  const handleCircleClick = (id) => {
    setVisibleSubtopics((prevState) => (prevState === id ? null : id)); // Toggle visibility
  };

  useEffect(() => {
    const handleScroll = () => {
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
        <p className="typing-text">
          Hello {username !== "" ? username : "Student"}!
        </p>
        <h1>Let's get started on today's lesson :&#41;</h1>
      </div>
      {showScrollText && <p className="scroll-down">↓ Scroll Down</p>}
      <h1 className="lessonTitle">Lessons</h1>
      <div className="next-section">
      {topics.map((topic, index) => (
          <div key={topic.id} className="topic">
            <div className="circle" onClick={() => handleCircleClick(topic.id)}>
              {topic.id}
            </div>
            {visibleSubtopics === topic.id && (
              <div className="subtopics">
                {topic.subtopics?.map((subtopic) => (
                  <Link key={subtopic.id} to={subtopic.path}>
                    <div className="subtopic">{subtopic.title}</div>
                  </Link>
                ))}
              </div>
            )}
            {index < topics.length - 1 && <div className="line"></div>}
          </div>
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