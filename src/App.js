import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Navbar from './components/Navbar'


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
    <Router> 
        <Navbar setIsLoggedIn={setIsLoggedIn}/>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
            </Routes>
    </Router>
    </div>
  )
}

export default App