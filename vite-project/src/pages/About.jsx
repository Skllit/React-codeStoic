import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

function About() {
    const {id}=useParams()
  return (
    <div>
      <h1>this is ABout page {id}</h1>
      <Outlet></Outlet>
    </div>
    
  )
}

export default About
