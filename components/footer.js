import styles from '../styles/footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.pie}>
            <div className={styles.primero}>
                <h3>Antonio Boceta Díaz</h3>
                <p>Procurador de los Tribunales.</p>
                <p>Colegiado nº 601 del Ilustre Colegio de Procuradores de Sevilla.</p>
                <br />
                <p>Calle Aguabajo nº 4 Bajo B</p>
                <p>41400 - Écija (Sevilla)</p>
                <p>Teléfono: 955 90 23 23  |  607 518 579</p>
            </div>

            <div className={styles.segundo}>
                <h6>Enlaces de interés:</h6>
                <Link href="/servicios">
                    <p>Servicios</p>
                </Link>
                <Link href="/about">
                    <p>Quienes somos</p>
                </Link>
                <Link href="/contacto">
                    <p>Contacto</p>
                </Link>
            </div>

        </div>
    )
}

export default Footer