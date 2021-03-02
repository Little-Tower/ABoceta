import Head from 'next/head'
import styles from '../styles/Home.module.css'
import barra from '../styles/barra.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Antonio Boceta Díaz | Tu procurador en Sevilla</title>
      </Head>
      <div className={styles.cuerpo}>
        <div className={styles.fotoHead}>
          <div className="container-fluid text-center">
            <h1 className="font-weight-bold">Procurador Antonio Boceta Díaz</h1>
            <h4>Tu procurador en la provincia de Sevilla</h4>
          </div>
          <Link href="servicios">
            <button className={`font-weight-bold ${styles.btnMas}`}>Descubra nuestros servicios</button>
          </Link>
        </div>

        <div className={styles.datos}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                <img className={styles.imgDatos} src="/profesionales.png" />
                <h4>Profesionalidad</h4>
              </div>

              <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                <img className={styles.imgDatos} src="/eficacia.png" />
                <h4>Eficacia</h4>
              </div>

              <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                <img className={styles.imgDatos} src="/xp.png" />
                <h4>Experiencia</h4>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.articulo}>

          <h2>Elaboramos demandas y escritos de ejecución.</h2>
          <p>Impulsando constantemente los procedimientos con obetenciónna
          de informes de solvencia y averiguación patrimonial.</p>
        </div>

        <div className={barra.fundaBarra} >
          <hr className={barra.barra} />
        </div>

        <div className={styles.articulo}>

          <h2>Realizamos embargos, lanzamientos, subastas judiciales.</h2>
          <p>Publicamos edictos y mandamientos en boletines oficiales y otros medios
          de publicidad.</p>
        </div>

        <div className={barra.fundaBarra} >
          <hr className={barra.barra} />
        </div>
        <div className={styles.articulo}>

          <h2>Realizamos diligencias previas a la demanda y gestiones extrajudiciales.</h2>
          <p>Ante organismo oficiales (Registro de la Propiedad, Registro Civil, organismos Públicos.
            Hacienda, Delegación de Tráfico...)</p>
        </div>

      </div>

    </div>
  )
}
