import {FaLinkedin , FaGithub, FaGlobeEurope} from 'react-icons/fa'
import '../css/Footer.css'
const Footer = () => {
  return (
    <div className="footer">

    <div className="socialMedia">
      <a href="http://comfortnt.netlify.app" target='blank'> <FaGlobeEurope/></a>

      <a href="https://github.com/ComfortNt" target='blank'> <FaGithub/> </a>

      <a href="https://www.linkedin.com/in/comfort-ntiwane-516b73247/" target='blank'><FaLinkedin/> </a>
    </div>
       
    </div>
  )
}

export default Footer
