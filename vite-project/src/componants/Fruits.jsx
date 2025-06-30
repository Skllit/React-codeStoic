import React from 'react'

const Fruits = () => {
    
    const fruit=[
       { name:"orange",price:20},
       { name:"apple",price:20},
       { name:"mango",price:20},
    ]
  return (
    <div>{ fruit.map((f)=>{ 
        return<ul>
            <li key={f.name}>{f.name} is RS:{f.price}</li>
        </ul>
    })}
      
    </div>
  )
}

export default Fruits
