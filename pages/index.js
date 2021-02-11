import Head from 'next/head'
import styles from '../styles/Home.module.css'
import barra from '../styles/barra.module.css'
import cuerpo from '../styles/cuerpo.module.css'

export default function Home() {
  return (
    <div >
      <div className={cuerpo.cuerpo}>
        <div className={barra.fundaBarra} >
          <hr className={barra.barra} />
        </div>

        <div className={cuerpo.articulo}>
          
          <h1>Elaboramos demandas y escritos de ejecución.</h1>
          <p>Impulsando constantemente los procedimientos con obetenciónna
          de informes de solvencia y averiguación patrimonial.</p>
        </div>

        <div className={barra.fundaBarra} >
          <hr className={barra.barra} />
        </div>

        <div className={cuerpo.articulo}>
          
          <h1>Realizamos embargos, lanzamientos, subastas judiciales.</h1>
          <p>Publicamos edictos y mandamientos en boletines oficiales y otros medios
          de publicidad.</p>
        </div>

        <div className={barra.fundaBarra} >
          <hr className={barra.barra} />
        </div>
        <div className={cuerpo.articulo}>
          
          <h1>Realizamos diligencias previas a la demanda y gestiones extrajudiciales.</h1>
          <p>Ante organismo oficiales (Registro de la Propiedad, Registro Civil, organismos Públicos.
            Hacienda, Delegación de Tráfico...)</p>
        </div>

        <div className={barra.fundaBarra} >
          <hr className={barra.barra} />
        </div>

      </div>

    </div>
  )
}
