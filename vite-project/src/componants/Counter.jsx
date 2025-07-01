import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);
    const [ib,Setib]=useState(1)

    function increase(){
        setCount(count+ib)
    }
    function ibIncrease(){
        Setib(ib+1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>inc</button>

      <h1>{ib}</h1>
      <button onClick={ibIncrease}>ibInc</button>
    </div>
  )
}

export default Counter
