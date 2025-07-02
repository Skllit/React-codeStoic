import FirstComp from "./componants/FirstComp"
import Fruits from "./componants/Fruits"
import Coco from "./componants/Coco"
import ElementVar from "./componants/ElementVar"
import Counter from "./componants/Counter"
import Forms from "./componants/Forms"
import { useReducer } from "react"
 

function App() {
  const [state ,dispatch]=useReducer(reducer,{count:0,incval:1})

  function reducer(state, action){
  if(action.type=="inc"){
    return {...state,count:state.count+state.incval};
  }
  if(action.type=="ivi"){
    return{...state,incval:action.payload};
  }
  return state;
  
}

  return (
          <div>
          <h1>count :{state.count}</h1>
          <input
          value={state.incval}
          type="number" 
          onChange={(e)=>dispatch({type:"ivi",payload:Number(e.target.value)})}></input>
          <button onClick={()=>dispatch({type:"inc",payload:1})}>inc</button>
          </div>
     

  )
}

export default App
