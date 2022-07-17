import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};


const Navbar = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate("/login");
  }


  return (
    <div>
    <nav> 
      <NavLink  to="/" exact style={linkStyles}>Home</NavLink>
      <NavLink to="/login"  exact style={linkStyles}>Login</NavLink>
      <NavLink to="/about"  exact style={linkStyles}>About</NavLink>
      <button onClick={handleLogout}>Logout</button>

    </nav>
    </div>
  )
}

export default Navbar