import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

const Home = ({isLoggedIn}) => {
  if(!isLoggedIn)  <Route path="/login" element={<Navigate replace to="/login" />} />

  return (
    <div>
        <h1>Welcome home page</h1>
    </div>
  )
}

export default Home