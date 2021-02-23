import styles from '../styles/about.module.css'
import Head from 'next/head'

const About = () => {
    return (
        <div>
            <Head>
                <title>Quienes somos | Procurador Antonio Boceta Díaz - Tu procurador en Sevilla.</title>
            </Head>
            <div className={styles.cuerpo}>
                <div className={styles.articulo}>
                    <p class={styles.titulos}>Esto somos nosotros:</p>
                    <div className={styles.descripcion}>

                        <p>Contamos con un amplio equipo de profesionales que garantizan
                        la correcta gestión de los asuntos con un trato directo día a día
                entre los partidos judiciales de Sevilla y provincia.</p>

                        <p>Nuestro despacho está con una constante renovanción, incorporando
                        las últimas tecnología para hacer una gestión más ágil y eficaz de cada caso.
                        </p>

                        <p>Nuestro despacho trabaja con el software líder en gestión legal Aranzadi.
                        Los mejores trabajan con los mejores y, Aranzadi junto a nuestro despacho
                        avalan y aseguran la rápida administración de cada caso.
                        </p>
                    </div>
                    <div className={styles.foto}>
                        <img className={styles.foto2} src="img/juzgados.jpg" alt="Foto juzgados" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About