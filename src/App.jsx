import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import Lesson1 from './pages/Lesson1'
import Quiz1 from './pages/quiz1'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    
    <Router>
      
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/lessons/lesson1" element={<Lesson1 />} />
        <Route path="/lessons/lesson2" element={<Lesson1 />} />
        <Route path="/quiz1" element={<Quiz1 />} />
      </Routes>
    </Router>
  )
}

export default App;
