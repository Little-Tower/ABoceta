import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import cabecera from '../styles/cabecera.module.css'

const Navbar = () => {
    return (
        <div>
            <div className={cabecera.contactoCabecera}>
                <a className={cabecera.textoPre} href="#">Contacte ahora con nosotros llamando al:</a><a href="tel:+34955902323"><i className="fas fa-phone"></i>955 90 23 23</a> <a href="mailto:procurador@boceta.net"> <i className="fas fa-envelope"></i>procurador@boceta.net</a>
            </div>

            <div className={cabecera.cabecera}>
                <nav>
                    <a href="#"><i className={styles.btnMenu} className="fas fa-align-justify"></i></a>
                    <ul>
                        <a href="#"><img src="img/logoAB.png" alt="" /></a>
                        <Link href="/">
                            <li><a className={cabecera.lista} href="index.html">Inicio</a></li>
                        </Link>
                        <Link href="/servicios">
                            <li><a className={cabecera.lista} href="servicios.html">Servicios</a></li>
                        </Link>
                        <Link href="/about">
                            <li><a className={cabecera.lista} href="quienes_somos.html">¿Quienes somos?</a></li>
                        </Link>
                        <Link href="enlaces">
                            <li><a className={cabecera.lista} href="enlaces.html">Enlaces</a></li>
                        </Link>
                        <Link href="/noticias">
                            <li><a className={cabecera.lista} href="noticias.html">Noticias</a></li>
                        </Link>
                        <Link href="/contacto">
                            <li><a className={cabecera.lista} href="contacto.html">Contacto</a></li>
                        </Link>
                    </ul>
                </nav>
            </div>

           {/*  <div className={styles.panel}>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="quienes_somos.html">¿Quienes somos?</a></li>
                <li><a href="enlaces.html">Enlaces</a></li>
                <li><a href="noticias.html">Noticias</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </div> */}
        </div>
    )
}

export default Navbar