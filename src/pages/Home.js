import React from 'react'
import { Navigate } from 'react-router-dom';

const Home = ({isLoggedIn}) => {

  if(!isLoggedIn) <Navigate to="/login"/>;

  return (
    <div>
        <h1>Welcome home page</h1>
    </div>
  )
}

export default Home