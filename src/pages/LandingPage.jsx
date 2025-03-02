import React, { use } from "react";
import "./LandingPage.css";
import { useSelector } from "react-redux";

const topics = [
  { id: 1, title: "Topic 1" },
  { id: 2, title: "Topic 2" },
  { id: 3, title: "Topic 3" },
  { id: 4, title: "Topic 4" },
  { id: 5, title: "Topic 5" },
];


const LandingPage = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="page-container">
      <div className="section">
        <p className="typing-text">Hello {(username != '') ? username : "Student"}!</p>
        <h1>Let's get started on today's lesson :&#41;</h1>
        <a href="#roadmap" className="scroll-down">↓ Scroll Down</a>
      </div>
      <div className="next-section">
        {topics.map((topic, index) => (
            <div key={topic.id} className="topic">
              <div className="circle" onClick={() => alert(`Clicked ${topic.title}`)}>
                {topic.id}
              </div>
              {index < topics.length - 1 && <div className="line"></div>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default LandingPage;
