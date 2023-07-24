import about from '../assets/multiplePizzas.jpeg'
import '../css/About.css'
const About = () => {
  return (
    <div className="about">
        
      <div className="aboutBottom">

        <h1>About Us</h1>

        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus debitis
            blanditiis aperiam quos fuga minima nisi adipisci facere ducimus autem deserunt aut pariatur,
            nemo quas excepturi iste tenetur vitae? Officia incidunt illum unde repudiandae aperiam, ea soluta
            possimus iste expedita hic officiis rerum omnis illo nesciunt earum exercitationem est cum laboriosam 
            placeat aliquam itaque? Voluptatum excepturi maxime possimus sint. Quaerat enim reiciendis ab 
            similique, optio voluptatem, accusamus suscipit nobis inventore 
            dignissimos sed harum. Fugiat tempora voluptatibus harum quam esse!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci repudiandae suscipit fuga eum, voluptate delectus pariatur
             repellendus harum tempora cumque ex, recusandae id repellat?
            </p>
      </div>
      <div className="aboutTop" style={{ backgroundImage : `url(${about})`}}></div>
    </div>
  )
}

export default About
