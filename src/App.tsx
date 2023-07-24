import { BrowserRouter as Router, Routes , Route }  from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css'



function App() {

  return(
    <>
     <Router>
      <Navbar/>
      <Routes>

        <Route path="/" Component={Home}/>

      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App