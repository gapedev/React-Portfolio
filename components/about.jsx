import Separator from "../components/separator";
import Circle from "../components/circle";

const About = () => {
    return (
        <div className="container about">
            <Separator 
        text="Sobre Mí"/>
            <Circle
            src='/img/foto-gabi.jpg'
            alt='Mi foto' />
            <div className="about_text">
                <h3>Hola! me llamo gabi, Front-End Developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, harum. Asperiores veritatis provident vero, dolorum veniam at deserunt reiciendis iste.</p>
            </div>
        </div>
    )
}

export default About;