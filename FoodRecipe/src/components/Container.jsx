import React from 'react'


function Container({children}) {
  return (
    <div style={{ display: 'flex' }}>
        {children}
    </div>
  )
}

export default Container
