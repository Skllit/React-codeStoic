
import { useReducer, useState } from "react"
 
function App() {
  const [state ,dispatch]=useReducer(reducer,{balance:0})
  const [amount,setAmount]=useState(0)

  function reducer(state, action){
    if(action.type=="add"){
      return {...state,balance:state.balance+action.payload}
    }
    if(action.type=="del"){
      return {...state,balance:state.balance-action.payload}
    }
    return state;
  
}

  return (
    <div>
      <h1> Balance:{ state.balance}</h1>
      <input type="number"
       value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
       <button onClick={()=>dispatch({type:"add",payload:Number(amount)})}>Deposit</button>
       <button onClick={()=>dispatch({type:"del",payload:Number(amount)})}>WithDrawl</button>
    </div>
        

  )
}

export default App
