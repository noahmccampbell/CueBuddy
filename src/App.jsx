import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import Lesson1 from './pages/Lesson1'
import Lesson2 from './pages/Lesson2'
import Quiz1 from './pages/quiz1'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/lessons/lesson1" element={<Lesson1 />} />
        <Route path="/lessons/lesson2" element={<Lesson2 />} />
        <Route path="/quiz1" element={<Quiz1 />} />
      </Routes>
    </Router>
  )
}

export default App;
