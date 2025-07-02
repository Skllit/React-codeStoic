import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>this is ABout page</h1>
      <Outlet></Outlet>
    </div>
    
  )
}

export default About
