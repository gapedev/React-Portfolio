import Link from 'next/link';
import Image from 'next/image';
import gabi from '../public/img/gabi.png';
import Github from './icons/github';
import Boton from '../components/boton'
import Linkedin from './icons/linkedin';

const Presentacion = () => {
    return (

        <div className='presentacion'>
            <div className='presentacion_img'>
                <Image src={gabi} alt="Yo" width={500} height={550} />
            </div>
            <div className='presentacion_text'>
                <h1>¡Hola!</h1>
                <h2>Soy Gabi Pérez, Front-End Developer.</h2>
                <div className='presentacion_about'>
                <Boton 
                text="Descargar CV"/>
                <Link href="www.google.es">
                    <Github width={40} height={40} fill={'black'}></Github>
                </Link>
                <Link href="www.google.es">
                    <Linkedin width={40} height={40} fill="black"></Linkedin>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Presentacion;