import FirstComp from "./componants/FirstComp"

 
function App() {
    const person ={
        name:'bob',
        age:'12'
    }
  
  return (
    <FirstComp person={person}></FirstComp>
  )
}

export default App
