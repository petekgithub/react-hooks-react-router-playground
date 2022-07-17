import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";



const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "pink",
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
      <NavLink 
        to="/" 
        exact style={linkStyles}  
        activeStyle={{
          background: "green",
        }}
      >Home
      </NavLink>
      <NavLink
        to="/login"
        exact style={linkStyles}  
        activeStyle={{
          background: "pink"
        }}
      >About</NavLink>
      <NavLink
        to="/login"
        exact style={linkStyles}  
        activeStyle={{
          background: "yellow"
      }}
      >Login</NavLink>
      <button onClick={handleLogout}>Logout</button>

     
    </div>
  )
}

export default Navbar