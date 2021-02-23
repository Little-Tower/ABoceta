import styles from '../styles/Contacto.module.css'
import Head from 'next/head'

const Contacto = () => {
    return (
        <div>
            <Head>
                <title>Contacto | Procurador Antonio Boceta Díaz - Tu procurador en Sevilla.</title>
            </Head>
            <div className={styles.articulo}>
                <h1 className={styles.titulosN}>Nos encontramos en:</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.56292624097!2d-5.080708384822756!3d37.54179913330231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12cabd189193bd%3A0x43311bf524ded754!2sCalle%20Aguabajo%2C%204%2C%2041400%20%C3%89cija%2C%20Sevilla%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sus!4v1577539794118!5m2!1ses!2sus" width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
                <br />
                <p>(Calle Aguabajo 4 Bajo B)</p>
            </div>


            <div className={styles.articulo}>
                <h1 className={styles.titulosN}>Contacto</h1>
                <div className={styles.formulario}>
                    <input type="text" name="Nombre" value="" placeholder="Nombre" /> 
                    <input type="text" name="Apellidos" value="" placeholder="Apellidos" /> 
                    <input type="text" name="Correo" value="" placeholder="Dirección de correo" /> 
                    <input type="text" name="Asunto" value="" placeholder="Asunto" /> 
                    <textarea className={styles.textarea} name="name" rows="8" cols="80" placeholder="Escriba aquí:"></textarea>
                    <div className="container text-center">
                        <button name="Enviar" value="Enviar" className={styles.btnContacto} >Enviar</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Contacto