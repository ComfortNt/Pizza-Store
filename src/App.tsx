import { BrowserRouter as Router, Routes , Route }  from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css'
import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from "./pages/Contact"



function App() {

  return(
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/menu" Component={Menu}/>
        <Route path="/about" Component={About}/>
        <Route path="/contact" Component={Contact}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  )
}

export default App
