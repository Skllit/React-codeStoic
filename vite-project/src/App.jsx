import { BrowserRouter,Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Navbar from "./componants/Navbar"
import Profile from "./pages/Profile"
 
function App() {
  

  return (
    
    <BrowserRouter>

    <Navbar></Navbar>
    <Routes>
      
      <Route path="/" element={<Home></Home>}></Route>

      {/* nesting links */}

      <Route path="/about" element={<About></About>}>
      <Route path="profile" element={<Profile></Profile>}></Route>
      </Route>

    </Routes>
    </BrowserRouter>

        

  )
}

export default App
