import React from "react";
import "./LandingPage.css";

const lessons = [
  { id: 1, title: "Lesson 1" },
  { id: 2, title: "Lesson 2" },
  { id: 3, title: "Lesson 3" },
  { id: 4, title: "Lesson 4" },
];

const LandingPage = () => {
  return (
    <div className="landing-container w-full">
      <div className="typing-container">
        <p className="typing-text">Hello #username#!</p>
        <h1>Let's get started on today's lesson.</h1>
      </div>

      <div className="roadmap">
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className="lesson">
            <div className="circle" onClick={() => alert(`Clicked ${lesson.title}`)}>
              {lesson.id}
            </div>
            {index < lessons.length - 1 && <div className="line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
