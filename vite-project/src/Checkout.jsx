import React, { useContext } from 'react'

import {userContext } from './Context/UserContext'

function Checkout() {
    const value=useContext(userContext)
  return (
    <div>
      <h1>Checkout :{value}</h1>
    </div>
  )
}

export default Checkout
