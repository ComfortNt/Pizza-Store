import Logo from "../assets/pizzaLogo.png"
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useState } from "react"
import '../css/Navbar.css'



const Navbar = () => {



    const [visable,Setvisable] = useState(false);


  return (
    <div className="navbar">

        <div className="navbar_logo" id={visable ? "open" : "close"} >
            <img src={Logo} alt=""/>

            <div className="hiddenLinks">
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu </Link>
          <Link to='/about'> About</Link>
          <Link to='/contact'> Contact</Link>
            </div>

        </div>

        <div className="navbar_links">
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu </Link>
          <Link to='/about'> About</Link>
          <Link to='/contact'> Contact</Link>

          <button onClick={ ()=> Setvisable(!visable)}> 
          <FaBars/> 
          </button>
        </div>

    </div>
  )
}

export default Navbar

