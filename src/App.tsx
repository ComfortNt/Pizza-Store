import { BrowserRouter as Router, Routes , Route }  from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css'
import Menu from "./pages/Menu"



function App() {

  return(
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/menu" Component={Menu}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  )
}

export default App
