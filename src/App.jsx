import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/landing" element={<LandingPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
