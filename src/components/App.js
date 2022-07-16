import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='App'>
        <Navbar setIsLoggedIn={setIsLoggedIn}/>
        <Router>
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