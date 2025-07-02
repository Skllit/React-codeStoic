
import Checkout from "./Checkout"
import { createContext, useContext } from "react"
import { UserProvider } from "./Context/UserContext"
 export const userContext=createContext();
function App() {

  return (
    
   <div>
  
  <UserProvider>
    <Checkout></Checkout>
  </UserProvider>
    
    </div>
    
   
  )
}

export default App
