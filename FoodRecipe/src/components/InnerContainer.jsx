import React from 'react'

function InnerContainer({children}) {
  return (
    <div style={{ backgroundColor:'aqua',flex:1,margin:10,padding:10 }}>
      {children}
    </div>
  )
}

export default InnerContainer
