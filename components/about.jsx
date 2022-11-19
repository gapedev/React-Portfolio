import Image from 'next/image';
import gabi from '../public/img/gabi.png';


const About = () => {
    return (

        <div className="about">
            <div className="about_text">
                <h3>Sobre Mí</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, perferendis? Delectus deserunt soluta nostrum dignissimos nihil quas fuga at magni?</p>
            </div>
            <div className='about_img'>
                <Image src={gabi} alt="yo" width={300} height={300} />
            </div>
            <div className="about_text">
                <h3>Cosas</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam enim eius nam perspiciatis aspernatur corrupti debitis, sit rerum praesentium.</p>
            </div>
        </div>
    )
}

export default About;