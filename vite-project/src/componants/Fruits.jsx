import React from 'react'

const Fruits = () => {
    
    const fruit=["apple","mango","orange"]
  return (
    <div>{ fruit.map((f)=>{ 
        return<ul>
            <li key={f}>{f}</li>
        </ul>
    })}
      
    </div>
  )
}

export default Fruits
