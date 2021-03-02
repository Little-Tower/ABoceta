import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import cabecera from '../styles/cabecera.module.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handlerClick = () => setClick(!click)

    return (
        <div>
            <div className={cabecera.contactoCabecera}>
                <a className={cabecera.textoPre} href="#">Contacte ahora con nosotros llamando al:</a><a href="tel:+34955902323"><i>✆</i> 955 90 23 23</a> <a href="mailto:procurador@boceta.net"> <i>✉</i> procurador@boceta.net</a>
            </div>
            <div className={cabecera.cabecera}>
                <div className={cabecera.btnMenu}>
                    <img src="/menu.svg" onClick={handlerClick} alt="Btn menu"/>
                    <img src="/logoAB.png" alt="logo" />
                </div>
                <div className={cabecera.logoMenu}>
                    <img src="/logoAB.png" alt="logo"/>
                </div>
                <nav className={styles.navbarXL}>
                    <ul>
                        <Link href="/">
                            <li onClick={handlerClick}><a >Inicio</a></li>
                        </Link>
                        <Link href="/servicios">
                            <li onClick={handlerClick}><a >Servicios</a></li>
                        </Link>
                        <Link href="/about">
                            <li onClick={handlerClick}><a >¿Quienes somos?</a></li>
                        </Link>
                        <Link href="enlaces">
                            <li onClick={handlerClick}><a >Enlaces</a></li>
                        </Link>
                        <Link href="/noticias">
                            <li onClick={handlerClick}><a >Noticias</a></li>
                        </Link>
                        <Link href="/contacto">
                            <li onClick={handlerClick}><a >Contacto</a></li>
                        </Link>
                    </ul>
                </nav>
                <div className={click ? styles.panel : styles.panelFuera}>
                <Link href="/">
                            <li onClick={handlerClick}><a >Inicio</a></li>
                        </Link>
                        <Link href="/servicios">
                            <li onClick={handlerClick}><a >Servicios</a></li>
                        </Link>
                        <Link href="/about">
                            <li onClick={handlerClick}><a >¿Quienes somos?</a></li>
                        </Link>
                        <Link href="enlaces">
                            <li onClick={handlerClick}><a >Enlaces</a></li>
                        </Link>
                        <Link href="/noticias">
                            <li onClick={handlerClick}><a >Noticias</a></li>
                        </Link>
                        <Link href="/contacto">
                            <li onClick={handlerClick}><a >Contacto</a></li>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar