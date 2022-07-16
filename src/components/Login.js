import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 

const Login = ({setIsLoggedIn}) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""

  });

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/");

  }


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData)

  }



  return (
    <form onSubmit={submitHandler}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onCHange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onCHange={handleChange}
      />
      <button type="submit">login</button>
    </form>
  )
}

export default Login