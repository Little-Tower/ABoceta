import Head from 'next/head'
import styles from '../styles/Noticias.module.css'

const Noticias = () => {
    return (
        <div>
            <Head>
                <title>Noticias | Procurador Antonio Boceta Díaz - Tu procurador en Sevilla.</title>
            </Head>
            <div className={styles.principal}>
                <h1 className="mt-5">Próximamente disponible.</h1>
            </div>
        </div>
    )
}

export default Noticias