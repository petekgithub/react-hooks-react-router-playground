import React from 'react'
import { Link, useNavigate } from "react-router-dom";


const Navbar = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate("/login");
  }


  return (
    <div>
    <nav> 
      <Link  to="/" >Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
      <button onClick={handleLogout}>Logout</button>

    </nav>
    </div>
  )
}

export default Navbar