import Image from 'next/image';
import gabi from '../public/img/gabi.png';
import Boton from '../components/boton'

const Presentacion = () => {
    return (

        <div className='presentacion'>
            <div className='presentacion_img'>
                <Image src={gabi} alt="Yo" width={500} height={500} />
            </div>
            <div className='presentacion_text'>
                <h1>¡Hola!</h1>
                <h2>Soy Gabi Pérez, Front-End Developer.</h2>
                <Boton 
                text="Descargar CV"/>
            </div>
        </div>
    )
}

export default Presentacion;