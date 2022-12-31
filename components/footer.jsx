import Separator from '../components/separator';
import Github from './icons/github';
import Linkedin from './icons/linkedin';

const Footer = () => {
    return (
        <div className="footer container">
            <Separator
            text="Contacto"
            />
            <div className="footer_content">
                <div className="footer_form">
                    <form>
                        <fieldset>
                            <div className="footer_item">
                                <label for="">Nombre*</label>
                                <input type="text" />
                            </div>
                            <div className="footer_item">
                                <label htmlFor="">Correo*</label>
                                <input type="text" />
                            </div>
                            <div className="footer_item">
                              <label htmlFor="">Mensaje *</label>
                              <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="footer_send">
                              <button type='submit'>Enviar</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="footer_info">
                    <div className="footer_text">
                      <p>Contacta conmigo</p>
                    </div>
                    <div className="footer_adress">
                      <span>Teléfono:</span>
                      <a href=""><p>601 06 87 78</p></a>
                    </div>
                    <div className="footer_adress">
                      <span>Email:</span>
                      <a href=""><p>gapedev@gmail.com</p></a>
                    </div>
                    <div className="footer_rrss">
                      <Github
                      width={30}
                      height={30}/>
                      <Linkedin
                      width={30}
                      height={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;