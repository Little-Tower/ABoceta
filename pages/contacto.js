import styles from '../styles/Contacto.module.css'
import cuerpo from '../styles/cuerpo.module.css'
import barra from '../styles/barra.module.css'

const Contacto = () => {
    return (
        <div>
            <div className={cuerpo.articulo}>
                <p className={styles.titulosN}>Nos encontramos en:</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.56292624097!2d-5.080708384822756!3d37.54179913330231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12cabd189193bd%3A0x43311bf524ded754!2sCalle%20Aguabajo%2C%204%2C%2041400%20%C3%89cija%2C%20Sevilla%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sus!4v1577539794118!5m2!1ses!2sus" width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
                <br />
                <p>(Calle Aguabajo 4 Bajo B)</p>
            </div>

            <div className={barra.fundaBarra} >
                <hr className={barra.barra} />
            </div>


            <div  className={cuerpo.articulo}>
                <p className={styles.titulosN}>Contacto</p>
                <div className={styles.formulario}>
                    <label for=""> <input type="text" name="Nombre" value="" placeholder="Nombre" /> </label>
                    <label for=""> <input type="text" name="Apellidos" value="" placeholder="Apellidos" /> </label>
                    <label for=""> <input type="text" name="Correo" value="" placeholder="Dirección de correo" /> </label>
                    <label for=""> <input type="text" name="Asunto" value="" placeholder="Asunto" /> </label>
                    <textarea className={styles.textarea} name="name" rows="8" cols="80" placeholder="Escriba aquí:"></textarea>
                    <label for=""> <input type="button" name="Enviar" value="Enviar" className="btn-news" /> </label>
                </div>
            </div>

            <div className={barra.fundaBarra} >
                <hr className={barra.barra} />
            </div>

        </div>
    )
}

export default Contacto