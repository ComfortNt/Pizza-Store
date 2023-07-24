import {Link} from 'react-router-dom'
import background from '../assets/pizza.jpeg'
import '../css/Home.css'


const Home = () => {
  return (

    <div className="home" style={ {backgroundImage: `url(${background})`}}>

      <div className="headerContainer">

        <h1> MamaMia's Pizzeria</h1>
        <p>"Bonjour flavor, bonjour pizza"</p>

       <Link to='/menu'>
       <button>Order Now!</button>
       </Link> 
      </div>


     


    </div>
  )
}

export default Home
 