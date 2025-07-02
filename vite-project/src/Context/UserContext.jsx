import { Children, createContext } from "react";

 const userContext=createContext();

function UserProvider({children}){
   return  <userContext.Provider value="jake">
              {children}
           </userContext.Provider>
}
export {UserProvider,userContext};