import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import Login from "./Login";
  function LoginPage() {
    const fullText = "Welcome to CueBuddy";
    const [displayText, setDisplayText] = useState("");
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Adjust speed here
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="login-container">
        <h1 className="typing-text">{displayText}</h1>
        <h3>Your companion for learning social cues and improving communication.</h3>
        <Login>
        <a href="#" className="google-signin">
          <img
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=600&name=image8-2.jpg"
            alt="Google Logo"
          />
          Sign in with Google
        </a>
        </Login>
      </div>
    );
  }
  
  export default LoginPage;
  
  