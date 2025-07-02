import { BrowserRouter,Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Navbar from "./componants/Navbar"
 
function App() {
  

  return (
    
    <BrowserRouter>

    <Navbar></Navbar>
    <Routes>
      
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>

    </Routes>
    </BrowserRouter>

        

  )
}

export default App
