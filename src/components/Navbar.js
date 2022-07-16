import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";



const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};


const Navbar = ({setIsLoggedIn}) => {



  return (
    <div>
      <NavLink 
        to="/" 
        exact style={linkStyles}  
        activeStyle={{
          background: "darkblue",
        }}
      >Home
      </NavLink>

      <NavLink 
        to="/" 
        exact style={linkStyles}  
        activeStyle={{
          background: "darkblue",
        }}
      >About
      </NavLink>

      <NavLink 
        to="/" 
        exact style={linkStyles}  
        activeStyle={{
          background: "darkblue",
        }}
      >Login
      </NavLink>

    </div>
  )
}

export default Navbar