import FirstComp from "./componants/FirstComp"
import Fruits from "./componants/Fruits"
import Coco from "./componants/Coco"
import ElementVar from "./componants/ElementVar"
import Counter from "./componants/Counter"
import Forms from "./componants/Forms"
import { useReducer } from "react"
 
function reducer(state, action){
  if(action.type=="inc"){
    return state+1;
  }
  return state;
  
}
function App() {
  const [state ,dispatch]=useReducer(reducer,0)

  return (
    <div>
          <h1>count :{state}</h1>
    <button onClick={()=>dispatch({type:"inc",payload:1})}>inc</button>
    </div>
     

  )
}

export default App
