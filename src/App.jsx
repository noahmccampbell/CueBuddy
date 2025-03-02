import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Lesson1 from './pages/Lesson1'



import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="log-in" element={<Login />} />
        <Route path="lesson1" element={<Lesson1 />} />
      </Routes>
    </Router>
  )
}

export default App;
